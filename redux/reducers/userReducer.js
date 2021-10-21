import { actionTypes } from "../actions/userActions"

const initialState = {
    userId: null
}

export default (state = initialState, { type, payload }) => {
    
    switch (type) {

        case actionTypes.setUser:
            return { ...state, ...payload }

        default:
            return state
    }
}
