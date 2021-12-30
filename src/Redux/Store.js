import { createStore } from "redux";
import {Counter} from "./Reducer";

const Store = createStore(Counter)

export default Store