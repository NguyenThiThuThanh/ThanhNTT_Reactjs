import * as types from './cart/type'
// import {GET_ALL_PRODUCT,GET_NUMBER_CART,ADD_CART, DELETE_CART} from  './cart/actions';

const initProduct = {
  numberCart: 0,
  Carts: [],
  _products: []
}

function rootReducer(state = initProduct, action) {
  switch (action.type) {
    case types.GET_ALL_PRODUCT:
      return {
        ...state,
        _products: action.payload
      }
    case types.GET_NUMBER_CART:
      return {
        ...state
      }
    case types.ADD_CART:
      if(state.numberCart === 0){
        let cart = {
          id: action.payload.id,
          quantity: 1,
          quantity_prod: action.payload.quantity,
          name: action.payload.name,
          image: action.payload.img,
          price: action.payload.price,
          variant: action.payload.variant
        }
        state.Carts.push(cart);
      } else {
        let check = false;
        state.Carts.map((item,key) => {
          if(item.id === action.payload.id){
            state.Carts[key].quantity++;
            check=true;
          }
        });
        if(!check){
          let _cart = {
            id:action.payload.id,
            quantity:1,
            quantity_prod: action.payload.quantity,
            name:action.payload.name,
            image:action.payload.img,
            price:action.payload.price,
            variant: action.payload.variant
          }
          state.Carts.push(_cart);
        }
      }

      return {
        ...state,
        numberCart: state.numberCart + 1
      }
    case types.DELETE_CART:
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter(item => {
          return item.id !== state.Carts[action.payload].id
        }),
        CartRemove: state.Carts[action.payload].id
      }
    case types.INCREASE_QUANTITY:
      let quantity_cart = state.Carts[action.payload].quantity;
      let quantity_prod = state.Carts[action.payload].quantity_prod;
      if (quantity_cart < quantity_prod) {
        state.numberCart++;
        state.Carts[action.payload].quantity++;
      }
      return {
        ...state
      }
    case types.DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }
      return {
        ...state
      }


    default:
      return state;
  }
}

export default rootReducer;



