import React, { useEffect } from "react";
import "./LoginScreen.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "../../redux/actions/auth.action";
import googleIcon from "../../assets/images/google_icon.png";
const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((state) => state.auth.accessToken);

  const handleLogin = () => {
    dispatch(Login());
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken) {
      navigate("/");
    }
  }, [accessToken, history]);

  return (
    <div className="login">
       <div className="login-button" onClick={handleLogin}>
        <div className="login-button__image">
          <img src={googleIcon} alt="google icon" />
        </div>
        <div className="login-button__text">
          <h5>
          Sign in with Google
          </h5>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
