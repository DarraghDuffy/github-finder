import React, { useState, useContext, useEffect } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

export default function UserSearch() {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { updateUser, clearUsers, users, initUsers } = githubContext;

  const [text, setText] = useState('');
  const { setAlert, removeAlert } = alertContext;

  const onChange = (obj) => {
    setText(obj.target.value);
  };

  useEffect(() => {
    initUsers();
  }, []);

  const updateSearch = (obj) => {
    obj.preventDefault();
    if (text.length === 0) {
      setAlert({ msg: 'Please enter something', type: 'danger' });
    } else {
      updateUser(text);
    }
  };
  return (
    <div>
      <form action='' className='form' onSubmit={updateSearch}>
        <input
          type='text'
          name='text'
          placeholder='search user..'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  );
}

// UserSearch = ({ setAlert, updateUser, clearUsers }) => {};

// export default UserSearch;
