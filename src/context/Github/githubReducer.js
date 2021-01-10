import {
  GET_INIT_USERS,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
  GET_USER,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    default:
      return state;

    case GET_INIT_USERS:
      return {
        ...state,
        initUsers: action.payload,
        loading: false,
      };
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false,
      };

    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
  }
};
