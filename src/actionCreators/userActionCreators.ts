import axios from "axios"
import {Dispatch} from "react"
import {FetchUserAction, FetchUserErrorAction, FetchUserSuccessAction, UserAction, UserActionTypes} from "../types/userTypes"

export const startFetch = (): FetchUserAction => {
    return {type: UserActionTypes.FETCH_USERS}
}
export const errorFetch = (): FetchUserErrorAction => {
    return {
        type: UserActionTypes.FETCH_USERS_ERROR,
        payload: "Произошла ошибка при загрузке пользователей"
    }
}
export const successFetch = (data: any[]): FetchUserSuccessAction => {
    return {
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: data,
    }
}


export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch(startFetch())
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            dispatch(successFetch(response.data))
        } catch (e) {
            dispatch(errorFetch())
        }
    }
}