import { useRef } from "react";
import styled from "styled-components";

export const ImageCommon = ({
    path = "",
    width = 40,
    height = 40,
    radius = "0px"
}) => {
    const imageRef = useRef(null);
    return (
        <Container
            width={width}
            height={height}
            radius={radius}
        >
            <img 
                src={path} 
                alt="" 
                onError={() => imageRef.current.src = "images/logos/music.jpg"} 
                ref={imageRef} 
            />
        </Container>
    );
};

const Container = styled.div`
    width: ${p => p.width + "px"};
    height: ${p => p.height + "px"};
    border-radius: ${p => p.radius};
    position: relative;
    overflow: hidden;
    
    img {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;