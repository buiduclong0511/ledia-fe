import { AddMenuComponent } from "src/components";

export const AddMenuModule = ({
    onAddSongToPlaying,
    onCloseAddMenu
}) => {
    return (
        <AddMenuComponent 
            onAddSongToPlaying={onAddSongToPlaying}
            onCloseAddMenu={onCloseAddMenu}
        />
    );
};