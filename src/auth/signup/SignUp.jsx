import "./signUp.css";
import { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
import SpotifyIcon from "../../components/spotify icon/SpotifyIcon";
import { useUserContext } from "../../context/UserContext";

function SignUp() {

  const initialState = {
    username: '',
    password: '',
  }

  const [inputValue, setInputValue] = useState(initialState)

  const { signupAuth } = useUserContext()

  const handleUsername = (event) => {
    setInputValue({ ...inputValue, username: event.target.value });
    console.log(inputValue);
  };
  const handlePassword = (event) => {
    setInputValue({ ...inputValue, password: event.target.value });
    console.log(inputValue);
  };

  const handleSignup = () => {
    signupAuth(inputValue)
  }

  return (
    <div className="total-signup-container">
      <SpotifyIcon />
      <div className="signup-container">
        <h1>Sign up to start listening</h1>
        <Input
          type={"text"}
          value={inputValue.username}
          onChange={handleUsername}
          label={"Email address"}
          placeholder={"user name"}
        />
        <Input
          type={"password"}
          value={inputValue.password}
          onChange={handlePassword}
          label={"Password"}
          placeholder={"password"}
        />
        <Link>Use phone number instead.</Link>
        <Link>
          <Button
            content={"Next"}
            backgroundColor="#1fdf64"
            color={"white"}
            fontSize={"18px"}
            onClick={handleSignup}
          />
        </Link>
        <div className="sep-signup-one">
          <span className="or">or</span>
        </div>
        <Button
          content={"continue with Google"}
          color={"white"}
          backgroundColor={"black"}
          fontSize={"15px"}
        />

        <div className="sep-signup-two"></div>
        <div className="login-link">
          Already have an account?<Link to={"/loginform"}>Log in here.</Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
