export const SET_NICKNAME = "SET_NICKNAME"
export const SET_USERLOGGED = "SET_USERLOGGED"


export const setUserNickname = nickname => ({
    type: SET_NICKNAME,
    payload: nickname
})

export const setUserLogged = userLogged => ({
    type: SET_USERLOGGED,
    payload: userLogged
})