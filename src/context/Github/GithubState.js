/* eslint-disable */
import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, CLEAR_USERS, SET_LOADING, GET_USER, GET_REPOS } from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    initialUsers: [],
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // SEARCH USERS
  const searchUsers = async text => {
    setLoading();
    const res = await axios.get(`https://github-api-react-express-node.herokuapp.com/api/github/search/users/${text}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // GET SINGLE USER
  const getSingleUser = async username => {
    setLoading();
    const res = await axios.get(`https://github-api-react-express-node.herokuapp.com/api/github/search/users/one/${username}`);
    setLoading(false);
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
    console.log(res.data);
  };

  // GET A USER'S GH REPOS
  const getUserRepos = async username => {
    setLoading();
    const res = await axios.get(
      `https://github-api-react-express-node.herokuapp.com/api/github/search/users/repos/${username}`
    );
    setLoading(false);
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // CLEAR USER'S FROM STATE
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  // SET LOADING
  const setLoading = () => dispatch({ type: SET_LOADING });


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
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
export default GithubState;
