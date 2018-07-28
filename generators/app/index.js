'use strict';

const yeoman = require('yeoman-generator');
const mkdirp = require('mkdirp');
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = yeoman.Base.extend({
  initializing: function() {
    this.props = {};
  },
  prompting: function() {
    this.log(
      yosay('Hello tjoy ' + chalk.red('generator android ') + 'lagi dibuat nih!!')
    );
    const prompts = [
      {
        name: 'name',
        message: 'Apa nama aplikasi Anda?',
        store: true,
        default: 'Android_MVVM_Movie',
        validate: function(input) {
          if (/^([a-zA-Z0-9_]*)$/.test(input)) {
            return true;
          }
          return 'Nama anda yang masukan salah tjuy!!!' + this.appname;
        }
      },
      {
        name: 'package',
        message: 'Apa nama package aplikasi Anda?',
        validate: function(input) {
          if (/^([a-z_]{1}[a-z0-9_]*(\.[a-z_]{1}[a-z0-9_]*)*)$/.test(input)) {
            return true;
          }
          return 'The package name you have provided is not a valid Java package name.';
        },
        default: 'com.mvvm.staterkit',
        store: true
      },
      {
        name: 'targetSdk',
        message: 'Berapa target maksimal SDK Anda?',
        store: true,
        default: 27
      },
      {
        name: 'minSdk',
        message: 'Berapa target minimum SDK Anda?',
        store: true,
        default: 19
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props.appPackage = props.package;
      this.appName = props.name;
      this.appPackage = props.package;
      this.androidTargetSdkVersion = props.targetSdk;
      this.androidMinSdkVersion = props.minSdk;
    });
  },

  writing: function() {
    var packageDir = this.props.appPackage.replace(/\./g, '/');
    mkdirp('app');
    mkdirp('app/src/androidTest/java/' + packageDir);
    mkdirp('app/src/main/res');
    mkdirp('app/src/main/java/' + packageDir);
    mkdirp('app/src/test/java/' + packageDir);
    mkdirp('app/src/test/java/' + packageDir);

    this.directory('gradle', 'gradle');
    this.directory('app/src/main/res', 'app/src/main/res');

    this.copy('gitignore', '.gitignore');
    this.copy('build.gradle', 'build.gradle');
    this.copy('gradle.properties', 'gradle.properties');
    this.copy('gradlew', 'gradlew');
    this.copy('gradlew.bat', 'gradlew.bat');
    this.copy('settings.gradle', 'settings.gradle');
    this.copy('app/gitignore', 'app/.gitignore');
    this.copy('app/proguard-rules.pro', 'app/proguard-rules.pro');

    this.template('README.md', 'README.md');
    this.template('app/build.gradle', 'app/build.gradle');
    this.template(
      'app/src/androidTest/java/id/co/gits/mvvmstarterkit',
      'app/src/androidTest/java/' + packageDir,
      this,
      {}
    );
    this.template(
      'app/src/commonTest/java/id/co/gits/mvvmstarterkit',
      'app/src/commonTest/java/' + packageDir,
      this,
      {}
    );
    this.template('app/src/main/AndroidManifest.xml', 'app/src/main/AndroidManifest.xml');
    this.template(
      'app/src/main/java/id/co/gits/mvvmstarterkit',
      'app/src/main/java/' + packageDir,
      this,
      {}
    );
    this.template('app/src/main/res/layout', 'app/src/main/res/layout', this, {});
    this.template(
      'app/src/test/java/id/co/gits/mvvmstarterkit',
      'app/src/test/java/' + packageDir,
      this,
      {}
    );
  }
});
