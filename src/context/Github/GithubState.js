/* eslint-disable */
import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  GET_INIT_USERS, SEARCH_USERS, CLEAR_USERS, SET_LOADING, GET_USER, GET_REPOS,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  console.log("we're in production 😎 😀 ");
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    initialUsers: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // SEARCH USERS
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
    console.log(res.data.items);
  };

  // GET SINGLE USER
  const getSingleUser = async (username) => {
    setLoading();
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    setLoading(false);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    console.log(res.data);
  };

  // GET A USER'S GH REPOS
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=creadted:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`,
    );
    setLoading(false);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
    console.log(res.data);
  };

  // CLEAR USER'S FROM STATE
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });

  // GET INIT USERS
  const getInitialUsers = async () => {
    setLoading();
    const res = await axios.get(`https://api.github.com/search/users&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

    dispatch({
      type: GET_INIT_USERS,
      payload: res.data.items,
    });
    console.log(res.data.items);
  };


  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getSingleUser,
        getUserRepos,
        getInitialUsers,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
