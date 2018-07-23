package <%= appPackage %>.ui.main;

import java.util.List;

import <%= appPackage %>.data.model.Ribot;
import <%= appPackage %>.ui.base.MvpView;

public interface MainMvpView extends MvpView {

    void showRibots(List<Ribot> ribots);

    void showRibotsEmpty();

    void showError();

}
