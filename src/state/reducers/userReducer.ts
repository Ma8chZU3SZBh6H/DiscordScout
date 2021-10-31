import { UserAction, UserState } from "../../types";
import { UserTypes } from "../types/userTypes";

const defaultState : UserState = {
    token: null
}

function userReducer(state = defaultState, action : UserAction) {
    switch (action.type) {
        case UserTypes.SET_TOKEN:
            return {...state, token: action.payload};
        default:
            return state;
    }
}

export default userReducer;