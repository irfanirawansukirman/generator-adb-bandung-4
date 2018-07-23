package <%= appPackage %>.injection.component;

import dagger.Subcomponent;
import <%= appPackage %>.injection.PerActivity;
import <%= appPackage %>.injection.module.ActivityModule;
import <%= appPackage %>.ui.main.MainActivity;

/**
 * This component inject dependencies to all Activities across the application
 */
@PerActivity
@Subcomponent(modules = ActivityModule.class)
public interface ActivityComponent {

    void inject(MainActivity mainActivity);

}
