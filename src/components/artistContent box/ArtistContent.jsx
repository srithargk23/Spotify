import "./artistcontent.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context/UserContext";



function ArtistContent({ artistcontent }) {
    const [artistSongs, setArtistSongs] = useState(null);
    const [artistID, setArtistID] = useState(null);

    const navigator = useNavigate()

    const { getArtistIdByName, getArtistbyId } = useUserContext()

    useEffect(() => {
        if (artistcontent) {
            getArtistIdByName(artistcontent).then((id) => {
                setArtistID(id)
                if (id) {
                    getArtistbyId(id).then((value) => {
                        setArtistSongs(value);
                    })
                }
            })
        }
    }, [artistcontent]);

    // Conditional rendering of the image
    let imageUrl = "";
    if (artistSongs && artistSongs.images && artistSongs.images.length > 0) {
        imageUrl = artistSongs.images[0].url;
    }

    const handleClick = () => {
        navigator("artistsongs", { state: { artistID: artistID } });
    };



    return (
        <div className='content-box' onClick={handleClick}>
            <div className='image'>
                {imageUrl ? (
                    <img src={imageUrl} alt="Artist" />
                ) : (
                    <img />
                )}
            </div>
            <div className='content'>
                <h4>{artistcontent}</h4>
                <p>Artist</p>
            </div>
        </div>
    );
}

export default ArtistContent;
