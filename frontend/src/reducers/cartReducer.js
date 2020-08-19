const { CART_ADD_ITEM } = require("../constants/productconstants");

function cartReducer(state = { cartItems: [] }, action) {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload;
        const product = state.cartItems.find(x => x.product === item.product);
        if (product) {
          return {
            cartItems:
              state.cartItems.map(x => x.product === product.product ? item : x)
          };
        }
        return { cartItems: [...state.cartItems, item] };
        default : 
            return state
        
   }
   
      
   
}

export { cartReducer }