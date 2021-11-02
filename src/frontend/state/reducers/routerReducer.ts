import {RouterAction, RouterState} from "../../../types";
import {RouterPages, RouterTypes} from "../types/routerTypes";

const routerState : RouterState = {
    page: RouterPages.LOADING
}

function routerReducer(state = routerState, action : RouterAction) {
    switch (action.type) {
        case RouterTypes.SETPAGE:
            return {page: action.payload};
        default:
            return state;
    }
}

export default routerReducer;