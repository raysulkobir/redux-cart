import {createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {cartReducer} from './cartItem/cartReducer';
const store = createStore(
    cartReducer , 
    composeWithDevTools());
export default store;