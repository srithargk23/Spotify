import "./artistsonglist.css";
import { useLocation } from "react-router-dom";
import SongCart from "../SongCart/SongCart";
import { useEffect, useState } from "react";
import { useUserContext } from "../../context/UserContext";

function ArtistSongList() {
  const location = useLocation();
  const artistID = location.state.artistID;

  console.log("Artist ID:", artistID);

  const [artistSongs, setArtistSongs] = useState();

  const { getSongsOfArtist, getUserFavoriteSongs } = useUserContext()

  useEffect(() => {
    getSongsOfArtist(artistID).then((result) => setArtistSongs(result.tracks))
  }, [artistID])

  const [favData, setFavData] = useState()
  useEffect(() => {
    getUserFavoriteSongs().then(data => setFavData(data))
  }, [])

  return (
    <div className="artistsonglist">
      {artistSongs?.map((data, index) => (
        <SongCart
          key={index}
          heading={data.name.length > 20 ? data.name.substring(0, 20) + "..." : data.name}
          description={data.album.name.length > 30 ? data.album.name.substring(0, 30) + "..." : data.album.name}
          imagesrc={data.album.images[0].url}
          id={data.id}
          uriToPlay={data.uri}
          favData={favData}
        />
      ))}
    </div>
  );
}

export default ArtistSongList;
