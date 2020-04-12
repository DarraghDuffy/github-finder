import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={props.classStyle} /> {props.title}
      </h1>
      <div>
        <Link to='/'> Home </Link>
        <Link to='/About'> About </Link>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  classStyle: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  classStyle: 'fa fa-github',
  title: "Github User & Users' Repo Finder",
};

export default Navbar;
