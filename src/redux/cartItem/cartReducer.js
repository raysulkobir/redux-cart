import { ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUBTRACT_QUANTITY } from "./actionType";

const initialState = {
    items:[],
}
export const cartReducer = (state = initialState, action)=>{

    if(action.type === ADD_TO_CART){
        let existed_item = state.items.find(item=> item.id === action.payload.id)
        if(existed_item){
            if(action.payload.main_qty > existed_item.qty){
                existed_item.qty +=1;
                return {
                ...state,
                items: [...state.items]
                    
            }
            }
        }else{
            let item = {
                id: action.payload.id,
                title: action.payload.title,
                main_qty: action.payload.main_qty,
                qty: 1,
            }
            return {
                ...state,
                items: [...state.items, item]
            }
        }
    }
    else if (action.type === REMOVE_ITEM){
        const new_items = state.items.filter(item => item.id !== action.payload);
        return {
            ...state,
            items: new_items
        }
    }
    else if(action.type === ADD_QUANTITY){
        let existed_item = state.items.find(item=> item.id === action.payload.id)
        if(existed_item){
            if(action.payload.main_qty > existed_item.qty){
                existed_item.qty +=1;

                return {
                    ...state,
                    items: [...state.items]
                    
                }
            }
        }
    }
    else if(action.type === SUBTRACT_QUANTITY){
        let existed_item = state.items.find(item=> item.id === action.payload.id)
        if(existed_item){
            if( existed_item.qty > 1){
                existed_item.qty -=1;

                return {
                    ...state,
                    items: [...state.items]
                    
                }
            }else{
                const new_items = state.items.filter(item => item.id !== action.payload.id);
                return {
                    ...state,
                    items: new_items
                }
            }
        }
    }
    return state
}