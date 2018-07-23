package <%= appPackage %>.test.common.injection.component;

import javax.inject.Singleton;

import dagger.Component;
import <%= appPackage %>.injection.component.ApplicationComponent;
import <%= appPackage %>.test.common.injection.module.ApplicationTestModule;

@Singleton
@Component(modules = ApplicationTestModule.class)
public interface TestComponent extends ApplicationComponent {

}
