import ArtistContent from "../artistContent box/ArtistContent";
import "./rightBarContent.css";
import WishBox from "../wishbox/WishBox";

function RightBarContent() {
  return <div className="rightBarContent-container">
    <WishBox />
    <ArtistContent artistcontent={"Anirudh Ravichandher"} />
    <ArtistContent artistcontent={"Yuvan Shankar Raja"} />
    <ArtistContent artistcontent={"G.V.Prakash Kumar"} />
    <ArtistContent artistcontent={"A.R.Rahman"} />
    <ArtistContent artistcontent={"Harris Jayaraj"} />
  </div>;
}

export default RightBarContent;
