import ContentBox from "../content box/ContentBox"
import WishBox from "../wishbox/WishBox"
import "./songheadingcontainer.css"

function SongHeadingContainer() {
    return (
        <div className="songheadingcontainer">
            <WishBox />
            <ContentBox maincontent={"Animal"} />
            <ContentBox maincontent={"Latest Telugu Hits"} />
            <ContentBox maincontent={"K.G.F - Chapter 1"} />
            <ContentBox maincontent={"Pushpa - The Rise"} />
            <ContentBox maincontent={"Leo(Tamil)"} />
        </div>
    )
}

export default SongHeadingContainer