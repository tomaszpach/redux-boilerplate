import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './index.css';

const initialState = {
    todos: [],
    posts: []
};

function myReducer(state = initialState, action) {
    if (action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.todo]
        }
    }

    if (action.type === 'ADD_POST') {
        return {
            ...state,
            posts: [...state.posts, action.post]
        }
    }
}

const store = createStore(myReducer);

store.subscribe(() => {
   console.log(store.getState())
});

const todoAction = { type: 'ADD_TODO', todo: 'buy milk' };
const todoAction2 = { type: 'ADD_TODO', todo: 'buy milk 2' };
const postAction = { type: 'ADD_POST', post: 'egg hunt with yoshi' };

store.dispatch(todoAction);
store.dispatch(todoAction2);
store.dispatch(postAction);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
