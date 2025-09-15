// import "./rightBarArea.css"

import RightBarContent from "../rightBarContent/RightBarContent"
import Row from "../row/Row"

function RightBarArea() {
    return (
        <div>
            <RightBarContent />
            <Row title={"Tamil Trending"} />
            <Row title={"2024 Kuthu songs"} />
            <Row title={"2024 Romantic"} />
            <Row title={"Kollywood corner"} />
            <Row title={"India's Best"} />
        </div>
    )
}

export default RightBarArea