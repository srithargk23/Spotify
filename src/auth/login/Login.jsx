import { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import SpotifyIcon from "../../components/spotify icon/SpotifyIcon";
import { Link } from "react-router-dom";
import "./login.css";
import { useUserContext } from '../../context/UserContext'


function Login() {

  const { loginAuth } = useUserContext()

  const initialState = {
    username: '',
    password: '',
  }

  const [inputValue, setInputValue] = useState(initialState)

  const handleUsername = (event) => {
    setInputValue({ ...inputValue, username: event.target.value });
  };
  const handlePassword = (event) => {
    setInputValue({ ...inputValue, password: event.target.value });
  };

  const handleLogin = () => {
    const userExists = loginAuth(inputValue)
    if (userExists) {
      navigateToSpotifyAuthorization()
    }
    else {
      alert("Invalid User name or Password")
    }

  }
  const navigateToSpotifyAuthorization = () => {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENTID}&redirect_uri=http://localhost:3000/homepage&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20playlist-modify-public%20playlist-modify-private%20user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true`;
  }
  return (
    <div className="main-container-login">
      <SpotifyIcon />

      <div className="sup-container-login">
        <div className="sub-container">
          <h1 className="heading-one">Login to spotify</h1>
          <div className="butt-group">

            <Button onClick={navigateToSpotifyAuthorization} content={"continue with Google"} />

            <div className="sep-one"></div>
            <Input
              type={"text"}
              value={inputValue.username}
              label={"Email or Username"}
              placeholder={"Email or Username"}
              onChange={handleUsername}
            />
            <Input
              type={"password"}
              value={inputValue.password}
              label={"Password"}
              placeholder={"Password"}
              onChange={handlePassword}
            />
            <span className="login-butt">

              <Button
                content={"Log In"}
                backgroundColor="#1fdf64"
                color={"white"}
                fontSize={"18px"}
                onClick={handleLogin}
              />

            </span>
            <div className="forgot-link">
              <Link>Forgot your password?</Link>
            </div>
            <div className="sep-two"></div>
          </div>
          <span className="span-signup">
            Don't have an account?
            <Link to={"/signup"}>Sign up for Spotify</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
