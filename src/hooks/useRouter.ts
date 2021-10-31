import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreType } from "../state/reducers/reducers";
import * as routerActions from "../state/actions/routerActions";

function useRouter() {
    const router = useSelector((store:StoreType) => store.router);
    const dispatch = useDispatch();
    const actions = bindActionCreators(routerActions, dispatch);
    return {router, ...actions}
}

export default useRouter;