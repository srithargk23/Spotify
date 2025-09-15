import "./favouriteCart.css";
import { faHeart, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";

function FavouriteCart({ imagesrc, heading, albumName, data, duration, artistName, id, uriToPlay, serialNO }) {

    const { addSongToFavorites, removeSongFromFavorites } = useUserContext()

    const isInclude = data && data?.some((value) => value.track.id === id)

    const [heartIcon, setHeartIcon] = useState(true);
    const { playSong, handleCurrentlyPlaying, currentlyPlaying, Playing } = useUserContext()
    const navigator = useNavigate()

    const number = duration / 60000;
    const result = number.toFixed(2).replace('.', ":")


    const handleClickAlbum = () => {
        navigator("/homepage/favouritesContent", { state: { album: albumName } });
    }
    const handleClickArtist = () => {
        navigator("/homepage/favouritesContent", { state: { artist: artistName } });
    }


    return (
        <div className="fav-song-cart">

            <div className="fav-index">{serialNO}</div>

            <div className="fav-index-no" onClick={() => {
                handleCurrentlyPlaying(id);
                playSong(uriToPlay)

            }} >
                {(currentlyPlaying === id && Playing === true) ? <FontAwesomeIcon icon={faPause} style={{ color: "white" }} /> : <FontAwesomeIcon icon={faPlay} style={{ color: "white" }} />}


            </div>

            <div className="fav-img">
                <img src={imagesrc} alt="img" />
            </div>

            <div className="fav-song-cart-link">
                <div>
                    <p className="heading" style={{ color: 'white' }}>{heading}</p>
                </div>

                <div onClick={handleClickArtist}>
                    <Link className="artistName" style={{ color: 'grey' }}>{artistName}</Link>
                </div>
            </div>


            <div className="fav-song-cart-album">

                <div onClick={handleClickAlbum}>
                    <Link className="albumName" style={{ color: "grey" }}>{albumName}</Link>
                </div>

            </div>

            {isInclude ? <div className="fav-heart">
                {heartIcon ?
                    <div onClick={() => { removeSongFromFavorites(id); setHeartIcon(!heartIcon) }}><FontAwesomeIcon icon={faHeart} style={{ color: "green" }} /></div> :
                    <div onClick={() => { addSongToFavorites(id); setHeartIcon(!heartIcon) }}><FontAwesomeIcon icon={farHeart} /></div>
                }
            </div> :
                <div className="fav-heart">
                    {heartIcon ?
                        <div onClick={() => { addSongToFavorites(id); setHeartIcon(!heartIcon) }}><FontAwesomeIcon icon={farHeart} /></div> :
                        <div onClick={() => { removeSongFromFavorites(id); setHeartIcon(!heartIcon) }}><FontAwesomeIcon icon={faHeart} style={{ color: "green" }} /></div>
                    }
                </div>
            }
            <div className="fav-duration">{result}</div>

        </div>
    );
}

export default FavouriteCart;