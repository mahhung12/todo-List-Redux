import React, { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addTodo, setTodo, deleteTodo } from "./actions";
import logger from "./logger";

/**
 * @returns useReducer
 *        1. Initial state
 *        2. Actions:
 *        3. Reducer
 *        4. Dispatch
 */

// 4. dispatch
function App() {
    const [state, dispatch] = useReducer(
        logger(reducer),
        initState
    );

    const { todo, todos } = state;

    const inputRef = useRef();

    const handleAdd = () => {
        dispatch(addTodo(todo));
        dispatch(setTodo(""));
        inputRef.current.focus();
    };
    return (
        <div style={{ padding: 20 }}>
            <h3>Todo</h3>
            <input
                type="text"
                placeholder="Enter todo..."
                value={todo}
                onChange={(e) => {
                    dispatch(setTodo(e.target.value));
                }}
                ref={inputRef}
            />
            <button onClick={handleAdd}>Add</button>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {" "}
                        {todo}
                        <span
                            onClick={() =>
                                dispatch(deleteTodo(index))
                            }
                        >
                            &times;
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
