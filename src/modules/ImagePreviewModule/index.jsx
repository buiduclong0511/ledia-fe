import { ImagePreviewComponent } from "src/components";

export const ImagePreviewModule = ({
    blobPath
}) => {
    return (
        <ImagePreviewComponent blobPath={blobPath} />
    );
};