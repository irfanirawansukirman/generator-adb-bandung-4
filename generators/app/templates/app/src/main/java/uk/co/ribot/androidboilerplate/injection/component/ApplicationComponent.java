package <%= appPackage %>.injection.component;

import android.app.Application;
import android.content.Context;

import javax.inject.Singleton;

import dagger.Component;
import <%= appPackage %>.data.DataManager;
import <%= appPackage %>.data.SyncService;
import <%= appPackage %>.data.local.DatabaseHelper;
import <%= appPackage %>.data.local.PreferencesHelper;
import <%= appPackage %>.data.remote.RibotsService;
import <%= appPackage %>.injection.ApplicationContext;
import <%= appPackage %>.injection.module.ApplicationModule;
import <%= appPackage %>.util.RxEventBus;

@Singleton
@Component(modules = ApplicationModule.class)
public interface ApplicationComponent {

    void inject(SyncService syncService);

    @ApplicationContext Context context();
    Application application();
    RibotsService ribotsService();
    PreferencesHelper preferencesHelper();
    DatabaseHelper databaseHelper();
    DataManager dataManager();
    RxEventBus eventBus();

}
