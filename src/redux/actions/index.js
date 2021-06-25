export const getProducts = (payload) => {
    return {
      type: "GET_PRODUCTS",
      payload,
    };
  };
  
  export const addProduct = (payload) => {
    return {
      type: "ADD_PRODUCT",
      payload,
    };
  };

  export const clearCart = (payload)=>{
      return{
          type:"CLEAR_CART",
          payload,
      };
  };