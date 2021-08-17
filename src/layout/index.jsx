import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { HeaderModule } from "src/modules";
import { router } from "src/routes";
import { SidebarComponent } from "src/components";

export const Layout = () => {
    return (
        <div className="grid">
            <div className="row no-gutters">
                <div className="col l-2 m-3 c-0">
                    <SidebarComponent />
                </div>
                <div className="col l-10 m-9 c-12">
                    <Router>
                        <HeaderModule />
                        <Switch>
                            {router.map((routerEle, index) => {
                                return (
                                    <Route key={index} path={routerEle.path} component={routerEle.component} />
                                );
                            })}
                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    );
};