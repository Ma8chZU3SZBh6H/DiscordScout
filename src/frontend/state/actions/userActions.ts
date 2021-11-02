import { Dispatch } from "redux";
import reqLogin from "../../api/reqLogin";
import { User, UserAction } from "../../../types";
import { UserTypes } from "../types/userTypes";

export function login(token: string, remember: boolean = false) {
  return function (dispatch: Dispatch<UserAction>) {
    console.log("REMEMBER", remember, remember === true);
    if (remember === true) {
      console.log("IT RAN??", remember);
      localStorage.setItem("token", token);
    }
    dispatch({
      type: UserTypes.SET_TOKEN,
      payload: token,
    });
  };
}

export function logout() {
  return function (dispatch: Dispatch<UserAction>) {
    console.log("ok??");
    localStorage.removeItem("token");
    dispatch({
      type: UserTypes.LOGOUT,
    });
  };
}

export function tokenValid(user: User) {
  return function (dispatch: Dispatch<UserAction>) {
    dispatch({
      type: UserTypes.TOKEN_VALID,
      payload: user,
    });
  };
}
