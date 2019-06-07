import axios from 'axios';
import {GET_TODOS, DELETE_TODO, ADD_TODO} from './types';

export const getTodos = () => async dispatch => {
    try {
        const res = await axios.get('/api/todos');
        dispatch({
            type: GET_TODOS,
            payload: res.data
        });
    } catch (err) {
        console.error('There was a error getting the todos', err);
    }
};

export const deleteTodo = todoId => async dispatch => {
    try {
        await axios.delete(`/api/posts/${todoId}`);
        dispatch({
            type: DELETE_TODO,
            payload: todoId
        });
    } catch(err) {
        console.error('There was an error deleting the todo', err);
    }
};

export const addTodo = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
        const res = await axios.post(`/api/posts`, formData, config);
        dispatch({
            type: ADD_TODO,
            payload: res.data
        });
    } catch(err) {
        console.error('There was an error adding the todo', err);
    }
};
