import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import { HeaderModule } from "src/modules";
import { router } from "src/routes";
import { breakpoint } from "src/utils";
import { StyledBackground, SidebarComponent } from "src/components";

export const Layout = () => {
    return (
        <Container>
            <StyledBackground />
            <div className="sidebarLayout">
                <SidebarComponent />
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

        ${breakpoint.breakIpadPro`
            flex: 2;
        `}

        ${breakpoint.breakMobile`
            display: none;
        `}
    }

    .mainContentLayout {
        flex: 4;
        /* padding: 0 20px; */

        ${breakpoint.breakIpadPro`
            flex: 5;
        `}

        ${breakpoint.breakMobile`
            flex: 1;
        `}
    }

    .headerLayout {
        position: sticky;
        top: 0;
    }
`;