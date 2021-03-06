import { applyMiddleware, createStore } from "redux";
import root from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const store = createStore(root, composeWithDevTools(applyMiddleware(thunk)));

export default store;
