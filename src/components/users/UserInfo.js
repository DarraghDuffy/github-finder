import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import UserRepos from '../repos/UserRepos';
import GithubContext from '../../context/github/githubContext';

const UserInfo = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { user, loading, getUser, repos, getRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    blog,
    avatar_url,
    followers,
    hireable,
    name,
    public_repos,
    public_gists,
    location,
    bio,
    html_url,
    following,
  } = user;

  if (loading) {
    return <Spinner> </Spinner>;
  } else {
    return (
      <Fragment>
        <Link to='/'>
          <button className='btn btn-light'>Back</button>
        </Link>
        <div>
          <div className='card grid-2'>
            <div className='all-center'>
              <img
                src={avatar_url}
                className='round-img'
                style={{ width: '150px' }}
              />
              <h1>{name}</h1>
              <p>Location {location}</p>

              <strong>Hireable</strong>
              {hireable ? (
                <i className='fas fa-check text-success'></i>
              ) : (
                <i className='fas fa-ban text-danger'></i>
              )}
            </div>
            <div>
              <h3> Bio </h3>
              {bio && (
                <Fragment>
                  <p>{bio && bio}</p>
                </Fragment>
              )}
              {!bio && (
                <Fragment>
                  <p>None provided</p>
                </Fragment>
              )}

              <div>
                {html_url && (
                  <a href={html_url} className='btn btn-dark my-1'>
                    Github info
                  </a>
                )}
                {blog && (
                  <a href={blog} className='btn btn-dark my-1'>
                    Blog
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='card text-center'>
          <div className='badge badge-primary'>Followers {followers} </div>
          <div className='badge badge-success'>Following {following} </div>
          <div className='badge badge-light'>Public Repos {public_repos} </div>
          <div className='badge badge-dark'>Gists {public_gists} </div>
        </div>
        <UserRepos> </UserRepos>
      </Fragment>
    );
  }
};

export default UserInfo;
