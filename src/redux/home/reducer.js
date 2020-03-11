import {SET_NICKNAME} from './actions'


const INITIAL_STATE = ""
const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SET_NICKNAME:
            return action.payload
        default:
            return state
    }
}

export default reducer;