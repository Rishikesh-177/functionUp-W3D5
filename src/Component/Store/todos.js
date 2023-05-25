import { createSlice } from "redux-toolkit";

const todosSlice = createSlice({
    name: "todos" ,
    initialState: {
        todos: [],
    },
    reducer: {
        oddTodo(state, action) {
            state.todos.push(action.payload);
},
updateTodoStatus(state, action) {
    const todo = state.todos.find((t) => t.id === action.payload.id);
    todo.status = action.payload.status;
},
removeTodo(state, action) {
    state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
    },
});

export const { addTodo, updateTodoStatus, removeTodo } = todosSlice.action;

export default todosSlice.reducer;