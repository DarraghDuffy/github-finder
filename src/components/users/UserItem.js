import React from 'react';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
  const { avatar_url, login } = props.user;
  return (
    <div className='card text-center'>
      <img src={avatar_url} className='round-img' style={{ width: '60px' }} />
      <h3>{login}</h3>
      <div>
        {/* <a className='btn btn-dark btn-sm'>More</a> */}
        <Link className='btn btn-dark btn-sm' to={`/User/${login}`}>
          More
        </Link>
      </div>
    </div>
  );
};
export default UserItem;
