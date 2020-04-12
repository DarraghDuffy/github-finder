import React, { Fragment } from 'react';

const RepoItem = (props) => {
  const { name, html_url, description } = props.repo;
  return (
    <div className='card'>
      <div>
        <strong> {name} </strong>
        <span>
          <Fragment>
            {props.repo.private ? (
              <i className='fas fa-lock'></i>
            ) : (
              <i className='fa fa-lock-open'></i>
            )}
          </Fragment>
        </span>
        <div>
          <a href={html_url} className='btn-link text-light'>
            Repo for more information
          </a>
        </div>
        <p style={{ textAlign: 'justify' }}>{description}</p>
      </div>
    </div>
  );
};
export default RepoItem;
