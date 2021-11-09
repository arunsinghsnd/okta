import { createStore } from "redux";
import { showName } from "./reducer/reducer";

const store = createStore(showName);

export default store;
