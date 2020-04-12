import React, { Component } from 'react';

export default class UserClear extends Component {
  userClear = (obj) => {
    obj.preventDefault();
    this.props.UserClear();
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.UserClear}>
          <input
            type='submit'
            value='Re-set'
            className='btn btn-light btn-block'
          />
        </form>
      </div>
    );
  }
}
