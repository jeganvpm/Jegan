import { ActionTypes } from "./ActionTypes";
import fakeApi from "./fakeApi";

export const fetchProducts = () => async (dispatch) => {
    const response = await fakeApi.get('/products');
    dispatch({type:ActionTypes.FETCHPRODUCT, payload:response.data})
}

export const fetchProduct = (id) => async (dispatch) => {
    const response = await fakeApi.get(`/products/${id}`);
    dispatch({type:ActionTypes.SELECTEDPRODUCT, payload:response.data})
}

export const setProducts = (products) => {
    return {
    type: ActionTypes.SETPRODUCT,
    payload: products
   }
}

export const selectedProduct = (product) => {
    return {
    type:ActionTypes.SELECTEDPRODUCT,
    payload: product
   }
}

export const removeSelectedProduct = () => {
    return {
        type: ActionTypes.REMOVESELECTEDPRODUCT
    }
}




