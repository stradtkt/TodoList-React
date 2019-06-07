import {GET_TODOS, DELETE_TODO, ADD_TODO} from './../actions/types';

const initialState = {
    todos: [],
    todo: null,
    error: {}
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    switch(type) {
        case GET_TODOS:
            return {
                ...state,
                todos: payload
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== payload)
            };
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            };
        default:
            return {
                state
            };
    }
}

