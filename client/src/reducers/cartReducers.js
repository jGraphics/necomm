const initialCartState = {
    items: [],
  };
  
  export const cartReducer = (state = initialCartState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return { ...state, items: [...state.items, action.item] };
      case REMOVE_FROM_CART:
        return {
          ...state,
          items: state.items.filter((item) => item.id !== action.itemId),
        };
      default:
        return state;
    }
  };
  