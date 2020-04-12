import React, { Fragment, useContext } from 'react';
import RepoItem from './RepoItem';
import GithubContext from '../../context/github/githubContext';

const UserRepos = (props) => {
  const githubContext = useContext(GithubContext);
  const { repos } = githubContext;

  return (
    <div className='grid-3'>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo}></RepoItem>
      ))}
    </div>
  );
};
export default UserRepos;
