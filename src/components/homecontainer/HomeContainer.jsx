import "./homecontainer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function HomeContainer() {
  return (
    <div className="homecontainer">
      <div className="homeIcon">
        <Link to={"/homepage"}>
          <FontAwesomeIcon icon={faHouse} />
          <h3>Home</h3>
        </Link>
      </div>

      <div className="searchIcon">
        <Link to={"search"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <h3>Search</h3>
        </Link>
      </div>
    </div>
  );
}

export default HomeContainer;
