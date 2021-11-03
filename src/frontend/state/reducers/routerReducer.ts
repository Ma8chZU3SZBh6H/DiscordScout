import { RouterAction, RouterState } from "../../../types";
import { RouterPages, RouterTypes } from "../types/routerTypes";

const routerState: RouterState = {
  page: RouterPages.LOADING,
  params: {},
};

function routerReducer(state = routerState, action: RouterAction) {
  switch (action.type) {
    case RouterTypes.SETPAGE:
      return {
        page: action.payload,
        params: { ...state.params, ...action.params },
      };
    default:
      return state;
  }
}

export default routerReducer;
