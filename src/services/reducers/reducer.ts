import { ADD_TO_CART, REMOVE_FROM_CART } from "../Constant"

const initialState = {
    cartData: []
}

const cartItems = (state: any=initialState, action: any) => {
    console.log("DDD : ",action)
    switch (action.type) {
        case ADD_TO_CART:
            state.cartData.push(action.data)
            return { ...state }
        case REMOVE_FROM_CART:
            return
        default:
            return state
    }
}

export default cartItems