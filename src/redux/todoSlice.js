// A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
import { createSlice } from '@reduxjs/toolkit';


const todoSlice = createSlice({
  name: 'list',
  initialState: {
    todos: [
      { id: 1, title: 'task1', done: false },
      { id: 2, title: 'task2', done: false },
      { id: 3, title: 'task3', done: false },
    ],
    show: 3,
  },
  reducers: {
    addTask: (state, action) => {
        //Obtenemos un id para la nueva tarea
        let id = (state.todos.length != 0) ? state.todos[state.todos.length -1].id + 1 : 1; //Si el state está vacio, el id será 1. Sino, obtendremos el ultimo y le sumamos 1
        
        //Creando y cargando una nueva tarea
        const newTask = { id: id, title: action.payload.title, done: false };
        state.todos.push(newTask);
    },
    
    deleteTask: (state, action) => {
        return state.todos.filter((task) => task.id !== action.payload.id);
    },
    
    updateTask: (state, action) => {
      const index = state.todos.findIndex((task) => task.id === action.payload.id);
      state.todos[index].done = !state.todos[index].done;
    },
    updateShow: (state, action) => {
      if (action.payload.action === 1)//Mostrar inconclusas
        state.show = 1;
      if (action.payload.action === 2)//Mostrar completadas
        state.show = 2;
      if (action.payload.action === 3)//Mostrar todo
        state.show = 3;
    },
  }
});

export const { addTask, deleteTask, updateTask, updateShow } = todoSlice.actions;
export default todoSlice.reducer;