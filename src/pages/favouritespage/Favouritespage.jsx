import "./favouritespage.css"
import { useEffect, useState } from "react"
import FavouriteCart from "../../components/favouritecart/FavouriteCart"
import { useUserContext } from "../../context/UserContext"

function Favouritespage() {

    const { getUserFavoriteSongs } = useUserContext()

    const [initialFavourites, setInitialFavourites] = useState()
    useEffect(() => {
        getUserFavoriteSongs().then((data) => setInitialFavourites(data))
    }, [])


    return (
        <div className="favouritesContainer">
            {initialFavourites?.slice(0, 28).map((data, index) => (
                <FavouriteCart
                    serialNO={index + 1}
                    albumName={data?.track?.album?.name}
                    artistName={data?.track?.artists[0]?.name.length < 20 ? data.track.artists[0].name : data.track.artists[0].name.substring(0, 20) + "..."}
                    data={initialFavourites}
                    duration={data?.track?.duration_ms}
                    heading={data?.track?.name?.length > 20 ? data.track.name.substring(0, 20) + "..." : data.track.name}
                    imagesrc={data?.track?.album?.images[0]?.url}
                    id={data?.track?.id}
                    uriToPlay={data?.track?.uri}
                />
            ))}

        </div>
    )
}

export default Favouritespage