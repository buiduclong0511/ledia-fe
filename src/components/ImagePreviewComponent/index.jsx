import styled from "styled-components";

import { breakpoint } from "src/utils";

export const ImagePreviewComponent = ({
    blobPath = "",
}) => {
    // console.log(blobPath);
    return (
        <Container blob={blobPath}>
            {blobPath ? (
                <img className="previewImg" src={blobPath} alt="" />
            ) : (
                <div className="noImage">
                    <i className="far fa-file-image"></i>
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    margin: 10px 0;
    border: 1px solid #fff;
    height: 400px;
    width: 400px;
    overflow-y: hidden;
    display: flex;
    align-items: center;
    background-color: ${p => p.blob ? "#000" : "transparent"};

    ${breakpoint.breakIpadPro`
        width: 250px;
        height: 250px;
    `}

    ${breakpoint.breakTablet`
        width: 200px;
        height: 200px;
    `}

    ${breakpoint.breakMobile`
        width: 250px;
        height: 250px;
    `}

    .noImage {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 100px;
        height: 100%;
        width: 100%;
    }

    .previewImg {
        width: 100%;
    }
`;