/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { songApi } from "src/api";
import { InputCommon, StyledButton, StyledUploadPage, LoaderOverlay } from "src/components";
import { ImagePreviewModule } from "src/modules";
import { authSelector, showLoginModal } from "src/redux";
import { convertFileToBlob, createFormData } from "src/utils";

export const Upload = () => {
    const userInfo = useSelector(authSelector).userInfo;
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();
    const [uploadInfo, setUploadInfo] = useState({
        songName: "",
        singer: "",
        author: "",
        // type: "",
        lyrics: "",
        thumb: null,
        audioFile: null,
        poster: userInfo?._id
    });
    const [isValidData, setIsValidData] = useState(true);
    const [thumbBlob, setThumbBlob] = useState("");

    // effect function
    const validateUploadData = () => {
        if (!uploadInfo.songName || !uploadInfo.audioFile || !uploadInfo.thumb) {
            return false;
        }
        return true;
    };
    // effect function

    // effect
    useEffect(() => {
        if (!userInfo) {
            dispatch(showLoginModal());
            history.goBack();
        }
    }, []);

    useEffect(() => {
        setIsValidData(validateUploadData());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [uploadInfo]);
    // effect

    // handle function
    // const handleChangeType = (event) => {
    //     setUploadInfo({
    //         ...uploadInfo,
    //         type: event.target.value
    //     });
    // };
    
    const handleChangeThumb = (event) => {
        setUploadInfo({
            ...uploadInfo,
            thumb: event.target.files[0]
        });
        setThumbBlob("" + convertFileToBlob(event.target.files[0]));
    };
    
    const handleChangeSongName = (event) => {
        setUploadInfo({
            ...uploadInfo,
            songName: event.target.value
        });
    };
    
    const handleChangeSinger = (event) => {
        setUploadInfo({
            ...uploadInfo,
            singer: event.target.value
        });
    };

    const handleChangeAuthor = (event) => {
        setUploadInfo({
            ...uploadInfo,
            author: event.target.value
        });
    };
    
    const handleChangeLyrics = (event) => {
        setUploadInfo({
            ...uploadInfo,
            lyrics: event.target.value
        });
    };
    
    const handleChangeAudioFile = (event) => {
        setUploadInfo({
            ...uploadInfo,
            audioFile: event.target.files[0]
        });
    };

    const fillData = () => {
        const filledData = uploadInfo;
        if (!filledData.singer) {
            filledData.singer = "unknown";
        }
        if (!filledData.author) {
            filledData.author = "unknown";
        }
        // if (!filledData.type) {
        //     filledData.type = "unknown";
        // }
        if (!filledData.lyrics) {
            filledData.lyrics = "unknown";
        }
        return filledData;
    };

    const handleUpload = () => {
        const body = fillData();
        setIsLoading(true);
        songApi.upload(createFormData(body))
            .then(res => console.log(res))
            .catch(err => console.log(err.response))
            .finally(() => setIsLoading(false));
    };
    // handle function

    // console.log("upload info: ", uploadInfo);

    return (
        <StyledUploadPage>
            {isLoading ? (
                <LoaderOverlay
                    height={70}
                    width={10}
                    margin={5}
                    radius={5}
                />
            ) : <></>}
            <div className="grid">
                <div className="row">
                    <div className="col l-5 m-5 c-12">
                        <div className="inputFile">
                            <p className="heading">Thumb image * </p>
                            <div className="input">
                                <ImagePreviewModule blobPath={thumbBlob} />
                                <input type="file" accept="image/*" onChange={handleChangeThumb} />
                            </div>
                        </div>
                        <div className="inputFile audioFile">
                            <p className="heading">Audio file * </p>
                            <div className="input">
                                <input type="file" accept="audio/*" onChange={handleChangeAudioFile} />
                            </div>
                        </div>
                    </div>
                    <div className="col l-7 m-7 c-12">
                        <div className="infoUpload">
                            <InputCommon 
                                label="Tên bài hát"
                                value={uploadInfo.songName}
                                onChange={handleChangeSongName}
                                required
                            />
                            <InputCommon 
                                label="Ca sĩ"
                                value={uploadInfo.singer}
                                onChange={handleChangeSinger}
                            />
                            <InputCommon 
                                label="Tác giả"
                                value={uploadInfo.author}
                                onChange={handleChangeAuthor}
                            />
                            {/* <SelectCommon 
                                label="Thể loại"
                                options={listTypes.current}
                                value={uploadInfo.type}
                                onChange={handleChangeType}
                            /> */}
                            <InputCommon 
                                label="Lời bài hát"
                                multiline
                                value={uploadInfo.lyrics}
                                onChange={handleChangeLyrics}
                            />
                            <div className="buttonUpload">
                                <StyledButton disabled={!isValidData} onClick={handleUpload}>Upload</StyledButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </StyledUploadPage>
    );
};