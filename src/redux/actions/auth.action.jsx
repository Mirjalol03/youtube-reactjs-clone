import { auth, provider } from "../../firebase";

import { signInWithPopup } from "firebase/auth";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionsTypes";
import { TOKEN_NAME, USER_INFO } from "../../utils/constants";
LOGIN_SUCCESS
export const Login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });
    const res = await signInWithPopup(auth, provider);

    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const accessToken = res.user.accessToken;
    const profile = {
      name: res.user.displayName,
      photoURL: res.user.photoURL,
    };

    localStorage.setItem(TOKEN_NAME, accessToken);
    localStorage.setItem(USER_INFO, JSON.stringify(profile));

    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispatch({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);

    dispatch({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};

export const log_out = () => async (dispatch) => {
  await auth.signOut();

  dispatch({
    type: LOG_OUT,
  });

  localStorage.removeItem(TOKEN_NAME);
  localStorage.removeItem(USER_INFO);
};
