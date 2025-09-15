import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const userContext = createContext(null);

const UserContextProvider = ({ children }) => {


  const [data, setData] = useState([{ username: "midhun", password: "4321" }])

  const loginAuth = (userData) => {

    const userExists = data.some(user => user.username === userData.username && user.password === userData.password);
    userExists ? console.log("yes") : console.log("no");
    return userExists;

  }

  const signupAuth = (userData) => {
    const userExists = data.some(user => user.username === userData.username && user.password === userData.password)
    if (userExists) {
      alert("User already exists")
    }
    else {
      data.push(userData)
    }
  }


  const [currentlyPlaying, setCurrentlyPlaying] = useState(null)

  const handleCurrentlyPlaying = (id) => {
    setCurrentlyPlaying(currentlyPlaying === id ? null : id)
  }


  const [Uripath, setUriPath] = useState()
  const playSong = (uri) => {
    if (uri) {
      setUriPath(uri)
    }
  }
  console.log(Uripath);

  const [Playing, setPlaying] = useState(false);
  const Isplaying = (state) => {
    setPlaying(state)
    console.log(Playing)
  }




  const getAccessToken = () => {
    return window.location.hash             //returns the current url from # 
      .substring(1)                       //extracts rest of the string other then #
      .split("&")
      .reduce((initial, item) => {
        const parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
      }, {})

  }

  const [AccessToken, setAccessToken] = useState()
  useEffect(() => {
    const hash = getAccessToken();
    // window.location.hash = "";
    const _token = hash.access_token;
    _token && setAccessToken(_token)
    sessionStorage.setItem("access_token", `${_token}`)
  }, [])
  AccessToken && console.log(AccessToken);

  const headers = {
    Authorization: `Bearer ${sessionStorage.getItem("access_token")}`,
    "Content-Type": "application/json",
  };



  //To get user details:

  const getUserDetails = async () => {
    try {
      const response = await axios.get("https://api.spotify.com/v1/me", {
        headers,
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching user details:', error);
      return null;
    }
  };



  //To add favourites
  const addSongToFavorites = async (songId) => {
    try {
      const response = await axios.put(`https://api.spotify.com/v1/me/tracks?ids=${songId}`, null, {
        headers,
      });
      console.log("Song added to favorites:", response.data);

    } catch (error) {
      console.error('Error adding song to favorites:', error);
      return null;
    }
  };



  //To delete a song from favourites
  const removeSongFromFavorites = async (songId) => {
    try {
      const response = await axios.delete(`https://api.spotify.com/v1/me/tracks?ids=${songId}`, {
        headers,
      });
      console.log("Song removed from favorites:", response.data);

    } catch (error) {
      console.error('Error removing song from favorites:', error);
      return null;
    }
  };


  // To get favourites
  const getUserFavoriteSongs = async () => {
    try {

      const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
        headers,
      });
      console.log("User Favorite Songs:", response.data.items);
      return response.data.items;

    } catch (error) {

      console.error('Error fetching user favorite songs:', error);
      return null;
    }
  };



  //To get id of particualr artist :

  const getArtistIdByName = async (artistName) => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        headers,
        params: {
          q: artistName,
          type: 'artist',
        },
      });

      const artistId = response.data.artists.items[0].id;
      return artistId;

    } catch (error) {
      console.error('Error fetching artist ID:', error);
      return null;
    }
  };




  //to get artist by passing id
  const getArtistbyId = async (artistId) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}`, {
        headers,
      });

      return response.data;

    } catch (error) {
      console.error('Error fetching artist details:', error);
      return null;
    }
  }



  //to get songs of a particular artist by passing id
  const getSongsOfArtist = async (artistId) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=IN`, {
        headers,
      })
      return response.data;
    }
    catch (error) {
      console.error('Error fetching songs', error)

    }
  }


  //to get id of particular heading or playlist
  const getIdOfSongs = async (playlistName) => {
    try {
      const response = await axios.get('https://api.spotify.com/v1/search', {
        headers,
        params: {
          q: playlistName,
          type: 'playlist',
        },
      });

      const playlistId = response.data.playlists.items[0].id;

      return playlistId;
    } catch (error) {
      console.error('Error fetching playlist ID:', error);
      return null;
    }
  }


  // to get songs of heading
  const getSongsByHeadingId = async (playlistId) => {
    try {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
        headers,
      });

      return response.data;
    } catch (error) {
      console.error('Error fetching playlist details:', error);
      return null;
    }
  }


  return (
    <userContext.Provider value={{
      AccessToken,
      loginAuth,
      signupAuth,
      playSong,
      handleCurrentlyPlaying,
      currentlyPlaying,
      Uripath,
      Isplaying,
      Playing,
      getUserDetails,
      addSongToFavorites,
      removeSongFromFavorites,
      getUserFavoriteSongs,
      getArtistIdByName,
      getArtistbyId,
      getSongsOfArtist,
      getIdOfSongs,
      getSongsByHeadingId
    }}>{children}</userContext.Provider>
  );
};
export default UserContextProvider;

export const useUserContext = () => useContext(userContext);
