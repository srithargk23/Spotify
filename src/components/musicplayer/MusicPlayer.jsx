import "./musicplayer.css";
import SpotifyWebPlayer from "react-spotify-web-playback";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";

function MusicPlayer() {

    // const { AccessToken } = useUserContext()

    const { Uripath, Isplaying } = useUserContext()
    Uripath && console.log(Uripath);

    const { currentlyPlaying } = useUserContext()

    const AccessToken = sessionStorage.getItem("access_token")

    const handlePlaybackStateChange = (state) => {
        Isplaying(state.isPlaying);

    };


    if (!AccessToken) return null
    return (
        <div className="musicplayer">

            <SpotifyWebPlayer
                token={AccessToken}
                showSaveIcon
                uris={Uripath && [Uripath]}
                play={currentlyPlaying ? true : false}
                callback={handlePlaybackStateChange}
                styles={{ bgColor: "black" }}
            />
        </div>
    );
}


export default MusicPlayer;