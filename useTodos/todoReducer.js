export const TODO_ADD_ACTION_TYPE = '[TODO] Add Todo';
export const TODO_DELETE_ACTION_TYPE = '[TODO] Delete Todo';
export const TODO_TOOGLE_ACTION_TYPE = '[TODO] Toggle Todo';


export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case TODO_ADD_ACTION_TYPE:
            return [...initialState, action.payload];
        case TODO_DELETE_ACTION_TYPE:
            return initialState.filter(todo => todo.id !== action.payload);
        case TODO_TOOGLE_ACTION_TYPE:
            return initialState.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                }

                return todo;
            });
                
        default:
            return initialState;
    }
}