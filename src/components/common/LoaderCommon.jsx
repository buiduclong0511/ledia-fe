import styled from "styled-components";
import ScaleLoader from "react-spinners/ScaleLoader";

export const LoaderOverlay = ({
    height = 35,
    width = 4,
    radius = 2,
    margin = 2
}) => {
    return (
        <LoaderOverlayContainer>
            <div className="overlay"></div>
            <div className="icon">
                <ScaleLoader
                    height={height}
                    width={width}
                    radius={radius}
                    margin={margin}
                    color="#36D7B7"
                />
            </div>
        </LoaderOverlayContainer>
    );
};

export const LoaderCommon = ({
    height = 35,
    width = 4,
    radius = 2,
    margin = 2,
    padding = 20
}) => {
    return (
        <LoaderCommonContainer padding={padding}>
            <div className="icon">
                <ScaleLoader
                    height={height}
                    width={width}
                    radius={radius}
                    margin={margin}
                    color="#36D7B7"
                />
            </div>
        </LoaderCommonContainer>
    );
};

const LoaderCommonContainer = styled.div`
    width: 100%;
    padding: ${p => `${p.padding}px 0`};
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoaderOverlayContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .3);
    }

    .icon {
        z-index: 1;
    }
`;