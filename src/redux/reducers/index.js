import { combineReducers } from "redux";
import contryListReducer from "./contryListReducer";

const root = combineReducers({ contry: contryListReducer });

export default root;
