import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { 
    GET_INIT_USERS,
    SEARCH_USERS,
    CLEAR_USERS,
    SET_LOADING,
    GET_USER,
    GET_REPOS,
} from '../types';

let githubClientId;
let githubClientSecret;


if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_CLIENT_SECRET: 
}else { 
    console.log('we\'re in production 😎 😀 ')
}

const GithubState = (props) => { 
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        initialUsers: [],
    }
}