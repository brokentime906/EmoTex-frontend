import Axios from "axios";
import { finishLoading, startLoading } from "./loading";
const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";
const GETUSER = "auth/GETUSER";

export const login = (email) => async (dispatch) => {
  dispatch(startLoading(LOGIN));
  try {
    const res = await Axios.post(`http://33775b0df2f5.ngrok.io/user/signin`, {
      email,
    });
    if (res.data.success) {
      const user = res.data.user;
      console.log(user);
      dispatch({ type: LOGIN, payload: user });
    }
  } catch (e) {
    console.log(e);
  }
  dispatch(finishLoading(LOGIN));
};
export const logout = () => ({ type: LOGOUT });
export const getUser = () => ({ type: GETUSER });

const initialSate = {
  isLoggedIn: false,
  user: null,
};

function auth(state = initialSate, action) {
  switch (action.type) {
    case LOGIN:
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case LOGOUT:
      return {
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}

export default auth;
