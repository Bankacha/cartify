const initialState = {
    data: [],
    filtered: [],
    cart: []
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return { ...state, data: action.payload };

        case 'SEARCH_PRODUCTS':
            return { ...state, filtered: state.data.filter(p => p.product.toLowerCase().includes(action.payload.toLowerCase())) };

        case 'ADD_TO_CART':
            const existing = state.cart.some(cartItem => cartItem.product.id === action.payload.product.id);

            if (existing) {
                return {
                    ...state,
                    cart: state.cart.map(cartItem => cartItem.product.id === action.payload.product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
                }
            } else {
                return { ...state, cart: [...state.cart, action.payload] }
            }
        case 'DELETE_ITEM':
            return { ...state, cart: [...state.cart.filter(p => p.product.id !== action.payload)] }
        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(cartItem => cartItem.product.id === action.payload ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
            };
        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map(cartItem => cartItem.product.id === action.payload && cartItem.quantity > 1
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem)
            };

        default:
            return state
    }
}

export default productReducer;