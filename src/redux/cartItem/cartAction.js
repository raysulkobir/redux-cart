import { ADD_TO_CART, REMOVE_ITEM, ADD_QUANTITY, SUBTRACT_QUANTITY } from './actionType';

export const addToCart = (product)=>{
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
export const removeItem = (id)=>{
    return {
        type: REMOVE_ITEM,
        payload: id
    }
}
export const addQuantity = (item)=>{
    return {
        type: ADD_QUANTITY,
        payload: item
    }
}
export const subtractQuantity = (item)=>{
    return {
        type: SUBTRACT_QUANTITY,
        payload: item
    }
}