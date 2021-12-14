import { useState, useRef } from "react";
import { useStore, actions } from "./store";

function App() {
    const [state, dispatch] = useStore();
    const { todos, todoInput } = state;

    const [editing, setEditing] = useState(false);
    const [editingIndex, setEditingIndex] = useState();

    const inputRef = useRef();

    const handleAdd = () => {
        console.log(todos);
        if (todoInput) {
            dispatch(actions.addTodo(todoInput));
            dispatch(actions.setTodoInput(""));

            inputRef.current.focus();
        }
    };

    const handleDelete = (index) => {
        dispatch(actions.deleteTodo(index));
    };

    const handleEdit = (index) => {
        console.log(todos[index]);

        dispatch(actions.setTodoInput(todos[index]));
        setEditing(true);
        setEditingIndex(index);

        // console.log(123);
        inputRef.current.focus();
    };
    const handleUpdate = () => {
        if (todoInput) {
            setEditing(false);
            dispatch(
                actions.editTodo({
                    value: todoInput,
                    index: editingIndex,
                })
            );
            dispatch(actions.setTodoInput(""));

            inputRef.current.focus();
        }
    };

    const handleCancel = () => {
        setEditing(false);
        dispatch(actions.setTodoInput(""));
        inputRef.current.focus();
    };

    return (
        <div className="todos-app">
            <h1>Todos Feature</h1>
            <div className="todos-btn">
                <input
                    type="text"
                    value={todoInput}
                    placeholder="Enter your todo..."
                    className="input"
                    onChange={(e) => {
                        dispatch(
                            actions.setTodoInput(e.target.value)
                        );
                    }}
                    ref={inputRef}
                />

                <button
                    onClick={
                        (editing && handleUpdate) || handleAdd
                    }
                    className={editing ? "btn-done" : "btn-add"}
                >
                    {(editing && "Done") || "Add"}
                </button>

                {editing && (
                    <button
                        onClick={handleCancel}
                        className="btn-cancel"
                    >
                        Cancel
                    </button>
                )}
            </div>
            <ul className="list-todos">
                {todos.map((todo, index) => (
                    <li key={index} className="todo-items">
                        <div className="items"> {todo}</div>
                        <div className="wrap-btn">
                            <span
                                className="btn-delete"
                                onClick={() =>
                                    handleDelete(index)
                                }
                            >
                                &times;
                            </span>

                            <span
                                className="btn-edit"
                                onClick={() => handleEdit(index)}
                            >
                                Edit
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
