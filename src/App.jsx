import { Layout } from "src/layout"
import { StyledBackground } from "src/components";
import { PlayerModule } from "src/modules";

export const App = () => {
    return (
        <div className="App">
            <StyledBackground />
            <Layout />
            <PlayerModule />
        </div>
    );
};