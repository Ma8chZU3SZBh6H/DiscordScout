import { Dispatch } from "redux"
import reqLogin from "../../api/reqLogin";
import { UserAction } from "../../types";
import { UserTypes } from "../types/userTypes";

export function login(token: string, remember: boolean = false) {
    return function (dispatch: Dispatch<UserAction>) {
        if (remember) {
            localStorage.setItem("token", token);
        }
        dispatch({
            type: UserTypes.SET_TOKEN,
            payload: token
        })
    }
}