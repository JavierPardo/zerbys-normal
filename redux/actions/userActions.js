export const actionTypes = {
    setUser: 'SET_USER'
}
export function setUserId(userId) {
    return {
        type: actionTypes.setUser,
        payload: {
            userId
        }
    }
}

export function setUser(payload) {
    return {
        type: actionTypes.setUser,
        payload
    }
}

export function clearUser() {
    return {
        type: actionTypes.setUser,
        payload: {
            userId: null
        }
    }
}