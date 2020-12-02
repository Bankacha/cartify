export const getProducts = (contacts) => {
    return {
        type: 'GET_PRODUCTS',
        payload: contacts
    }
}

export const searchProducts = (input) => {
    return {
        type: 'SEARCH_PRODUCTS',
        payload: input
    }
}

export const  addToCart = (cartItem) => {
    return {
        type: 'ADD_TO_CART',
        payload: cartItem
    }
}