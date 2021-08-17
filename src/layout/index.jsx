import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { HeaderModule } from "src/modules";
import { router } from "src/routes";

export const Layout = () => {
    return (
        <Container>
            <div className="sidebarLayout">
                <h1>side bar</h1>
            </div>
            <div className="mainContentLayout">
                <div className="headerLayout">
                    <HeaderModule />
                </div>
                <div className="pageContentLayout">
                    <Router>
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
        </Container>
    );
};

const Container = styled.div`
    display: flex;

    .sidebarLayout {
        flex: 1;
    }

    .mainContentLayout {
        flex: 4;
    }
`;