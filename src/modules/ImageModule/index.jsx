import { useState } from "react";
import styled from "styled-components";

export const ImageModule = ({
    path = "",
    width = 40,
    height = 40,
    radius = "0px"
}) => {
    const [isShowImage, setIsShowImage] = useState(true);

    const handleShowDefaultImage = () => {
        setIsShowImage(false);
    };
    return (
        <Container
            width={width}
            height={height}
            radius={radius}
        >
            {isShowImage ? (
                <img 
                    src={path} 
                    alt="" 
                    onError={handleShowDefaultImage} 
                />
            ) : (
                <div className="noImage">
                    <i class="fas fa-music"></i>
                </div>
            )}
        </Container>
    );
};

const Container = styled.div`
    width: ${p => p.width + "px"};
    height: ${p => p.height + "px"};
    border-radius: ${p => p.radius};
    position: relative;
    overflow: hidden;
    background-color: #000;
    
    img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .noImage {
        width: 100%;
        height: 100%;
        background-color: #696767;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;