import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchUser from '../User/Loadable';
import SearchDoctor from '../Doctor/Loadable';

import { isRequired } from './isAuth';

class Home extends Component {
  get renderContent() {
    const { currentUser } = this.props;

    if (currentUser.role === 'admin') {
      return <SearchUser {...this.props} />;
    }

    return <SearchDoctor {...this.props} />;
  }

  render() {
    return <div className="home-containers">{this.renderContent}</div>;
  }
}

Home.propTypes = {
  currentUser: PropTypes.object,
};

export default isRequired(Home);
