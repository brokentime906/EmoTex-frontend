const LOGIN = "auth/LOGIN";
const LOGOUT = "auth/LOGOUT";
const GETUSER = "auth/GETUSER";

export const login = (user) => ({ type: LOGIN, user });
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
        user: action.user,
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
