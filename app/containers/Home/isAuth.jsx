import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectCurrentUser,
  makeSelectLoading,
} from '../App/selectors';

// eslint-disable-next-line import/prefer-default-export
export const isRequired = (OldComponent) => {
  class newComponent extends Component {
    componentWillMount() {
      this.onChecking(this.props);
    }

    componentWillReceiveProps(nextProps) {
      this.onChecking(nextProps);
    }

    // eslint-disable-next-line class-methods-use-this
    onChecking(props) {
      const { currentUser = {}, history, isLoaded } = props;
      if (isLoaded && !currentUser.id) {
        history.replace('/login');
      }
    }

    render() {
      return <OldComponent {...this.props} />;
    }
  }

  const mapStateToProps = createStructuredSelector({
    isLoaded: makeSelectLoading(),
    currentUser: makeSelectCurrentUser(),
  });

  newComponent.propTypes = {
    history: PropTypes.object,
    isLoaded: PropTypes.bool,
    currentUser: PropTypes.object,
  };

  return connect(mapStateToProps)(withRouter(newComponent));
};
