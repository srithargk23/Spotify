import { useNavigate } from "react-router-dom"
import "./wishbox.css"


function WishBox() {

  const navigator = useNavigate()

  const handleClick = () => {
    navigator("favourites")
  }


  return (
    <div className='content-box' onClick={handleClick}>

      <div className='image'>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJajJJzgbfhJxwYK2f9KzVci3O1gUmEIm94mOQAz8nl6W76EF9A1CQazNVwYh69odt2Ek&usqp=CAU" alt="" />

      </div>
      <div className='favouritiesContent'>

        <h4>Favourites</h4>


      </div>

    </div>
  )
}

export default WishBox