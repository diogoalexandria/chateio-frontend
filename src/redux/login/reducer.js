import { SET_NICKNAME, SET_USERLOGGED } from './actions'


const INITIAL_STATE = {
    nickname: "",
    userLogged: false
}
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_NICKNAME:
            return { ...state, nickname: action.payload }
        case SET_USERLOGGED:
            return { ...state, userLogged: action.payload }
        default:
            return state
    }
}

export default reducer;