import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { StoreType } from "../state/reducers/reducers";
import * as routerActions from "../state/actions/routerActions";
import { RouterState } from "../../types";

function useRouter() {
  const router: RouterState = useSelector((store: StoreType) => store.router);
  const dispatch = useDispatch();
  const actions = bindActionCreators(routerActions, dispatch);
  return { router, ...actions };
}

export default useRouter;
