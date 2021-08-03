import { Route, Switch } from "react-router-dom";
import { FilteredImagesPage } from "../pages/FilteredImagesPage";
import { HomePage } from "../pages/HomePage";
import { UploadPage } from "../pages/UploadPage";

export function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/images/tags/:tag' component={FilteredImagesPage} />
            <Route path='/upload' component={UploadPage} />
        </Switch>
    );
}