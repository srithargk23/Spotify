import { useEffect, useState } from "react";
import "./contentbox.css";
import { useNavigate } from "react-router-dom";
import ContentBoxSongs from "../contentBoxSongs/ContentBoxSongs";
import { useUserContext } from "../../context/UserContext";

function ContentBox({ description, maincontent }) {
    const [contentBoxdetails, setContentBoxdetails] = useState(null);
    const [contentBoxId, setContentBoxId] = useState(null)
    const navigator = useNavigate()

    const { getIdOfSongs, getSongsByHeadingId } = useUserContext()

    useEffect(() => {
        if (maincontent) {
            getIdOfSongs(maincontent).then(songId => {
                if (songId) {
                    setContentBoxId(songId)
                    getSongsByHeadingId(songId).then(songs => {
                        setContentBoxdetails(songs);
                    });
                }
            });
        }
    }, [maincontent]);

    // Conditional rendering for the image
    let imageUrl = "";
    if (contentBoxdetails && contentBoxdetails.items && contentBoxdetails.items.length > 0) {
        const { items } = contentBoxdetails;
        if (items[1]?.track?.album?.images && items[1].track.album.images.length > 0) {
            imageUrl = items[1].track.album.images[1].url;
        }
    }


    const handleClick = () => {
        navigator("contentboxSongs", { state: { contentBoxId: contentBoxId } });
    }

    return (
        <div className='content-box' onClick={handleClick}>
            <div className='image'>

                {imageUrl ? (
                    <img src={imageUrl} alt="Content" />
                ) : (
                    <></>
                )}
            </div>
            <div className='content'>
                <h4>{maincontent}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ContentBox;
