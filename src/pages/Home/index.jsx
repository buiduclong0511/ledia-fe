import { StyledHomePage, ListSongComponent } from "src/components";

export const Home = () => {
    const listSongs = [
        {
            cover: "images/ha-con-vuong-nang.jpg"
        },
        {
            cover: "images/ha-con-vuong-nang.jpg"
        },
        {
            cover: "images/ha-con-vuong-nang.jpg"
        },
        {
            cover: "images/ha-con-vuong-nang.jpg"
        },
        {
            cover: "images/ha-con-vuong-nang.jpg"
        },
        {
            cover: "images/ha-con-vuong-nang.jpg"
        },
    ];

    return (
        <StyledHomePage>
            <div className="banner"></div>
            <ListSongComponent 
                heading="Bài hát được nghe nhiều nhất"
                listSongs={listSongs}
            />
            <ListSongComponent 
                heading="Playlist được yêu thích nhất"
                listSongs={listSongs}
            />
            <ListSongComponent 
                heading="Bài hát nghe gần đây"
                listSongs={listSongs}
            />
        </StyledHomePage>
    );
};