import { SET_TODO, ADD_TODO, DELETE_TODO } from "./constants.js";

// 1. Init State
export const initState = {
    todo: "",
    todos: [],
};

// 3. Reducer
const reducer = (state, action) => {
    switch (action.type) {
        case SET_TODO:
            return {
                ...state,
                todo: action.payload,
            };

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case DELETE_TODO:
            const newTodos = [...state.todos];
            newTodos.splice(action.payload, 1);

            return {
                ...state,
                todos: newTodos,
            };

        default:
            throw new Error("Invalid actions");
    }
};

export default reducer;
