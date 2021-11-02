import { UserAction, UserState } from "../../../types";
import { UserTypes } from "../types/userTypes";

const defaultState: UserState = {
  token: localStorage.getItem("token") ?? null,
  loggedin: false,
  data: null,
};

function userReducer(state = defaultState, action: UserAction) {
  switch (action.type) {
    case UserTypes.SET_TOKEN:
      return { ...state, token: action.payload };
    case UserTypes.LOGOUT:
      return { ...state, token: null, loggedin: false };
    case UserTypes.TOKEN_VALID:
      return { ...state, loggedin: true, data: action.payload };
    default:
      return state;
  }
}

export default userReducer;
