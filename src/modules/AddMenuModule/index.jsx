import { AddMenuComponent } from "src/components";

export const AddMenuModule = ({
    onAddSongToPlaying
}) => {
    return (
        <AddMenuComponent onAddSongToPlaying={onAddSongToPlaying} />
    );
};