import axios from "axios"
import {Dispatch} from "react"
import { fetchTodoAction, fetchTodoErrorAction, fetchTodoSuccessAction, setTodoPageAction, TodoAction, TodoActionTypes } from "../types/todoTypes"


export const fetchTodo = (): fetchTodoAction => {
    return {type: TodoActionTypes.FETCH_TODO}
}
export const fetchErrorTodo = (): fetchTodoErrorAction => {
    return {
        type: TodoActionTypes.FETCH_TODO_ERROR,
        payload: "Произошла ошибка при загрузке списка дел"
    }
}
export const fetchSuccessTodo = (data: any[]): fetchTodoSuccessAction => {
    return {
        type: TodoActionTypes.FETCH_TODO_SUCCESS,
        payload: data,
    }
}
export const setTodoPage = (page:number): setTodoPageAction => {
    return {
        type: TodoActionTypes.SET_TODO_PAGE,
        payload: page,
    }
}


export const fetchTodos = (page=1, limit=10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch(fetchTodo())
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
                params:{_page:page, _limit:limit}
            })
            dispatch(fetchSuccessTodo(response.data))
        } catch (e) {
            dispatch(fetchErrorTodo())
        }
    }
}