import "./search.css"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import SongCart from "../SongCart/SongCart"
import { useUserContext } from "../../context/UserContext"

function Search() {

    const { getIdOfSongs, getSongsByHeadingId } = useUserContext()

    const [inputValue, setInputValue] = useState("")
    const [searchResult, setSearchResult] = useState([])

    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    useEffect(() => {

        getIdOfSongs(inputValue).then(songId => {
            if (songId) {
                getSongsByHeadingId(songId).then(songs => {
                    if (songs.items && songs.items.length > 0) {
                        setSearchResult(songs.items);
                    }
                })
            }
        })
    }, [inputValue])


    return (
        <div className="search-container">

            <div className="input-container">
                <input type="search" onChange={handleChange} value={inputValue} placeholder="what do you want to listen?" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>

            <div className="search-result">
                {searchResult?.length > 0 ? (
                    searchResult.slice(0, 30).map((data, index) => (
                        <SongCart
                            key={index}
                            heading={data?.track?.name?.substring(0, 20) + "..." || 'Unknown Name'}
                            description={data?.track?.artists?.[0]?.name?.substring(0, 35) + "..." || 'Unknown Artist'}
                            imagesrc={data?.track?.album?.images?.[0]?.url || "https://example.com/default-image.jpg"}
                            id={data?.track?.id || 'Unknown ID'}
                            uriToPlay={data?.track?.uri}
                        />
                    ))
                ) : (
                    <div className="no-results">No results found</div>
                )}
            </div>



        </div>

    )
}

export default Search