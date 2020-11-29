import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {addPost, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {
    ReactDOM.render(<App
        state={state}
        updateNewPostText={updateNewPostText}
        addPost={addPost}/>, document.getElementById('root'));


}


