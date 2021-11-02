import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreType } from "../state/reducers/reducers";
import * as userActions from "../state/actions/userActions";


function useUser() {
    const dispatch = useDispatch();
    const user = useSelector((store:StoreType) => store.user);
    const actions = bindActionCreators(userActions, dispatch);
    return {user, ...actions};
}

export default useUser;