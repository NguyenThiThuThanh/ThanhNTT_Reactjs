import * as types from './type';

/*GET_ALL_PRODUCT*/
export function GetAllProduct(payload) {
  return {
    type: 'GET_ALL_PRODUCT',
    payload
  }
}

/*GET_NUMBER_CART*/
export function GetNumberCart() {
  return {
    type: types.GET_NUMBER_CART
  }
}

/*ADD_CART*/
export function AddCart(payload) {
  return {
    type: types.ADD_CART,
    payload
  }
}
export function UpdateCart(payload){
  return {
      type: types.UPDATE_CART,
      payload
  }
}
export function DeleteCart(payload){
  return{
      type: types.DELETE_CART,
      payload
  }
}
export function IncreaseQuantity(payload){
  return{
      type: types.INCREASE_QUANTITY,
      payload
  }
}
export function DecreaseQuantity(payload){
  return{
      type: types.DECREASE_QUANTITY,
      payload
  }
}

