import reactDom from "react-dom";
import App from "./App";
import {compose, createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import "./index.scss";
import reducers from "./state/reducers/reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(reducers, compose(applyMiddleware(thunk), composeWithDevTools()));

reactDom.render(<Provider store={store}><App/></Provider>, document.getElementById("root"));