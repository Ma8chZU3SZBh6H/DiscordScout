import { Dispatch } from "redux";
import { RouterAction } from "../../types";
import { RouterPages, RouterTypes } from "../types/routerTypes";

export function loginPage() {
    return function (dispatch : Dispatch<RouterAction>) {
        dispatch({
            type: RouterTypes.SETPAGE,
            payload: RouterPages.LOGIN
        });
    }
}

export function dashboardPage() {
    return function (dispatch : Dispatch<RouterAction>) {
        dispatch({
            type: RouterTypes.SETPAGE,
            payload: RouterPages.DASHBOARD
        });
    }
}