import "./favouritesContent.css"
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FavouriteCart from '../../../components/favouritecart/FavouriteCart';
import { useUserContext } from "../../../context/UserContext";

function FavouritesContent() {
    const location = useLocation();
    const album = location.state.album;
    const artist = location.state.artist;
    const [favouritesContent, setFavouritesContent] = useState();

    const value = album ? album : artist

    const { getIdOfSongs, getSongsByHeadingId, getUserFavoriteSongs } = useUserContext()

    useEffect(() => {
        if (value) {
            console.log(value);
            getIdOfSongs(value).then(songId => {
                getSongsByHeadingId(songId).then(songs => {
                    if (songs.items && songs.items.length > 0) {
                        setFavouritesContent(songs.items);
                    }
                })

            })
        }

    }, [])

    const [favData, setFavData] = useState()
    useEffect(() => {
        getUserFavoriteSongs().then((value) => setFavData(value))
    }, [])


    return (
        <div className='favouritesContent'>
            {favouritesContent?.slice(0, 25).map((data, index) => (
                <FavouriteCart
                    serialNO={index + 1}
                    albumName={data?.track?.album?.name}
                    artistName={data?.track?.artists[0]?.name.length < 20 ? data.track.artists[0].name : data.track.artists[0].name.substring(0, 20) + "..."}
                    duration={data?.track?.duration_ms}
                    heading={data?.track?.name?.length > 20 ? data.track.name.substring(0, 20) + "..." : data.track.name}
                    imagesrc={data?.track?.album?.images[0]?.url}
                    id={data?.track?.id}
                    uriToPlay={data?.track?.uri}
                    data={favData}
                />
            ))}

        </div>
    )
}

export default FavouritesContent