import React, { useReducer, createContext } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  UPDATE_USER,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Search Users
  const updateUser = (user) => {
    // setText(user);
    // setAlert(null);
    if (user) {
      setLoading();
      axios
        .get(
          `https://api.github.com/search/users?client_id=${githubClientId}&client_secret=${githubClientSecret}&q=${user}`
        )
        .then((res) => {
          dispatch({ type: UPDATE_USER, payload: res.data.items });
        });
    }
  };

  const initUsers = () => {
    setLoading();
    axios
      .get(
        `https://api.github.com/users?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      )
      .then((res) => {
        dispatch({ type: UPDATE_USER, payload: res.data });
      });
  };

  // Get User

  const getUser = (username) => {
    setLoading();
    axios
      .get(
        `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`
      )
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      });
  };

  // Get Repos
  const getRepos = (username) => {
    axios
      .get(
        `https://api.github.com/users/${username}/repos?sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`
      )
      .then((res) => {
        dispatch({ type: GET_REPOS, payload: res.data });
      });
  };

  // Clear Users
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // Set Loading

  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        initUsers,
        updateUser,
        clearUsers,
        getUser,
        getRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
