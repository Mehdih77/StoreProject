export const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT'
}

export const initialState = {
    username: null,
    password: null,
    loading: false,
    erroe: null
}

export function reducer(state,action) {
    switch (action.type) {
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                username: null,
                password: null,
                loading: true
            }
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                loading: false
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                username: null,
                password: null,
                loading: false
            }
        default: 
        throw Error('Error')
    }
}