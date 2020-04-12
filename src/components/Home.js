import React, { Fragment } from 'react';
import Users from '../components/users/Users';
import UserSearch from '../components/users/UserSearch';

export default function Home() {
  return (
    <Fragment>
      <UserSearch></UserSearch>
      <Users></Users>
    </Fragment>
  );
}
