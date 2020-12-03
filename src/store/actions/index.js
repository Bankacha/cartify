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

export const addToCart = (cartItem) => {
    return {
        type: 'ADD_TO_CART',
        payload: cartItem
    }
}

export const deleteCartItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        payload: id
    }
}

export const increaseQuantity = (productId) => {
    return {
        type: 'INCREASE_QUANTITY',
        payload: productId
    }
}

export const decreaseQuantity = (productId) => {
    return {
        type: 'DECREASE_QUANTITY',
        payload: productId
    }
}