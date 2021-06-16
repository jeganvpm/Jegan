import { ActionTypes } from "../ActionTypes";

const initialState = {
    products: []
};

export const ProductReducer = (state = initialState, {type,payload}) => {
 switch (type) {
     case ActionTypes.SETPRODUCT:
     return {...state, products:payload}
     case ActionTypes.FETCHPRODUCT:
     return {...state, products:payload}
     default:
         return state
 }
}

export const SelectedProductReducer = (state = initialState, {type,payload}) => {
  switch (type) {
    case ActionTypes.SELECTEDPRODUCT:
        return {...state, ...payload}
    case ActionTypes.REMOVESELECTEDPRODUCT:
        return {}    
        default:
        return state
  }
}





