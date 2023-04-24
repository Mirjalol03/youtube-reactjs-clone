import { TOKEN_NAME, USER_INFO } from "../../utils/constants";
import {
  LOGIN_REQUEST,
  LOAD_PROFILE,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOG_OUT,
} from "../actionsTypes";

const initialState = {
  accessToken: localStorage.getItem(TOKEN_NAME)
    ? localStorage.getItem(USER_INFO)
    : null,
  user: localStorage.getItem(USER_INFO)
    ? localStorage.getItem(USER_INFO)
    : null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...prevState,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };

    case LOGIN_FAIL:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...prevState,
        user: payload,
      };
    case LOG_OUT:
      return {
        ...prevState,
        accessToken: null,
        user: null,
      };

    default:
      return prevState;
  }
};
