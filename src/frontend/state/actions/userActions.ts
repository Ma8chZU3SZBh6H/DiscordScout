import { Dispatch } from "redux"
import reqLogin from "../../api/reqLogin";
import { UserAction } from "../../types";
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
            payload: token
        })
    }
}

export function logout() {
    return function (dispatch: Dispatch<UserAction>) {
        console.log("ok??");
        localStorage.removeItem("token");
        dispatch({
            type: UserTypes.SET_TOKEN,
            payload: null
        })
    }
}