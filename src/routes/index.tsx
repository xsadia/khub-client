import { Route, Switch } from "react-router-dom";
import { FilteredImagesPage } from "../pages/FilteredImagesPage";
import { HomePage } from "../pages/HomePage";
import { ImagePage } from "../pages/ImagePage";
import { UploadPage } from "../pages/UploadPage";

export function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/images/tags/:tag' exact component={FilteredImagesPage} />
            <Route path='/upload' exact component={UploadPage} />
            <Route path='/images/:id' exact component={ImagePage} />
        </Switch>
    );
};