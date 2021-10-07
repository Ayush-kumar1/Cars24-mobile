export const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_WISHLIST":
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }

        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }

        case "REMOVE_FROM_WISHLIST":

            const newWishlist = state.wishlist.filter(elem => elem !== action.payload)

            return {
                ...state,
                wishlist: newWishlist
            }

        case "REMOVE_FROM_CART":

            const newCart = state.cart.filter(elem => elem !== action.payload)
            return {
                ...state,
                cart: newCart
            }

        default:
            return state;
    }
}