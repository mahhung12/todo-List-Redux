import {
    SET_TODO_INPUT,
    ADD_TODO,
    DELETE_TODO,
    EDIT_TODO,
    UPDATE_TODO,
} from "./constants";

const initState = {
    todos: [],
    todoInput: "",
};

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload,
            };

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };

        case DELETE_TODO:
            const newState = [...state.todos];
            newState.splice(action.payload, 1);

            return {
                ...state,
                todos: newState,
            };

        case EDIT_TODO:
            const newTodosEdit = [...state.todos];
            newTodosEdit[action.payload.index] =
                action.payload.value;

            return {
                ...state,
                todos: newTodosEdit,
            };

        // case UPDATE_TODO:
        // // const newTodosUpdate = action.payload;
        // // const arrayTodos =

        // // // return {
        // // //     ...state,
        // // //     todos: new
        // // // }

        default:
            throw new Error("Invalid action !!");
    }
}

export { initState };
export default reducer;
