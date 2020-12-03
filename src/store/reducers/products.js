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
            // return {...state, cart: state.data.filter( p => p.product.id === action.payload.id)}
            console.log(action.payload, state.cart)
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
            return { ...state, cart: [...state.cart.filter(p => p.product.id !== action.payload)]}
        // case 'INCREASE':
        //     return { ...state, cart: {...state.cart.map(item => {item, quantity: state.cart.quantity + action.payload})}}

        default:
            return state
    }
}

export default productReducer;