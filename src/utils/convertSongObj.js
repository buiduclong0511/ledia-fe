export const convertSongObj = (song) => {
    const _song = {};
    _song.name = song.songName;
    _song.musicSrc = song.fileUrl;
    _song.cover = song.coverUrl;
    _song.singer = song.singer;
    _song.lyric = song.lyrics;
    _song.key = song._id
    return _song;
};