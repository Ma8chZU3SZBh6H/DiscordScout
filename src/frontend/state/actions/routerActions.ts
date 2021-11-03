import { Dispatch } from "redux";
import { RouterAction } from "../../../types";
import { RouterPages, RouterTypes } from "../types/routerTypes";

export function loginPage(params?: any) {
  return function (dispatch: Dispatch<RouterAction>) {
    dispatch({
      type: RouterTypes.SETPAGE,
      payload: RouterPages.LOGIN,
      params: params,
    });
  };
}

export function dashboardPage(params?: any) {
  return function (dispatch: Dispatch<RouterAction>) {
    dispatch({
      type: RouterTypes.SETPAGE,
      payload: RouterPages.DASHBOARD,
      params: params,
    });
  };
}

export function destroyerPage(params?: any) {
  return function (dispatch: Dispatch<RouterAction>) {
    dispatch({
      type: RouterTypes.SETPAGE,
      payload: RouterPages.DESTROYER,
      params: params,
    });
  };
}
