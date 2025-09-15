import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArtistSongList from "../components/artistSongList/ArtistSongList";
import Search from "../components/search/Search";
import HomePage from "../pages/homepage/HomePage";
import Login from "../auth/login/Login";
import LandingPage from "../pages/landingpage/Landingpage";
import SignUp from "../auth/signup/SignUp";
import RightBarArea from "../components/rightBarArea/RightBarArea";
import ContentBoxSongs from "../components/contentBoxSongs/ContentBoxSongs";
import Favouritespage from "../pages/favouritespage/Favouritespage";
import FavouritesContent from "../pages/favouritespage/favouritesContent/FavouritesContent";


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loginform" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/homepage" element={<HomePage />} >

          <Route index element={<RightBarArea />} />
          <Route path="search" element={<Search />} />
          <Route path="artistsongs" element={<ArtistSongList />} />
          <Route path="contentboxSongs" element={<ContentBoxSongs />} />
          <Route path="favourites" element={<Favouritespage />} />
          <Route path="favouritesContent" element={<FavouritesContent />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
