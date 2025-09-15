import { Outlet } from "react-router-dom";
import HomeContainer from "../../components/homecontainer/HomeContainer";
import Navbar from "../../components/navbar/Navbar";
import MusicPlayer from "../../components/musicplayer/MusicPlayer";
import SongHeadingContainer from "../../components/songHeadingContainer/SongHeadingContainer";
import "./homepage.css";


const HomePage = () => {

  return (
    <div className="parentpage-container">
      <div className="left-bar">
        <HomeContainer />
        <SongHeadingContainer />
      </div>
      <div className="right-bar">
        <Navbar />
        <div className="rightBarArea">
          <Outlet />
        </div>
      </div>
      <MusicPlayer />

    </div>
  );
};

export default HomePage;
