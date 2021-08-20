export const convertSongObj = (song) => {
    const _song = {};
    _song.name = song.songName || song.name;
    _song.musicSrc = song.fileUrl || song.musicSrc;
    _song.cover = song.coverUrl || song.cover;
    _song.singer = song.singer || song.singer;
    _song.lyric = song.lyrics || song.lyric;
    _song.key = song._id || song.key;
    return _song;
};