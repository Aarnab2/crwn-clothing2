export const addItemToCart = (cartItems, cartItemToAdd) => {
    let isFound = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)
    if (isFound)
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    else
        return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}