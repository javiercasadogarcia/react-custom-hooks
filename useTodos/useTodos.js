import { useReducer, useEffect } from "react"
import { TODO_ADD_ACTION_TYPE, TODO_DELETE_ACTION_TYPE, TODO_TOOGLE_ACTION_TYPE, todoReducer } from "./todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos) || []);
    
    }, [todos])    

    const handleNewTodo = (todo) => {
        console.log('handleNewTodo');
        const action = {
            type: TODO_ADD_ACTION_TYPE,
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: TODO_DELETE_ACTION_TYPE,
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: TODO_TOOGLE_ACTION_TYPE,
            payload: id
        });
    }

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}
