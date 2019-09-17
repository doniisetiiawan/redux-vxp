import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from '../../utils/injectSaga';
import { makeSelectLogedIn } from '../App/selectors';
import Form from './Form';
import saga from './saga';
import { onRegisterRequest } from './actions';

class RegisterPage extends Component {
  componentDidMount() {
    const { isLoggedIn, history } = this.props;
    if (isLoggedIn) {
      history.push('/');
    }
  }

  componentDidUpdate() {
    const { isLoggedIn, history } = this.props;
    if (isLoggedIn) {
      history.push('/');
    }
  }

  render() {
    const { onSubmit } = this.props;
    return (
      <div className="register-containers">
        <Helmet>
          <title>Register Page</title>
          <meta name="description" content="Register page" />
        </Helmet>
        <Form onSubmit={onSubmit} />
      </div>
    );
  }
}

RegisterPage.propTypes = {
  onSubmit: PropTypes.func,
  history: PropTypes.object,
  isLoggedIn: PropTypes.bool,
};

export const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectLogedIn(),
});

export const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => dispatch(onRegisterRequest(e.toJS())),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withSaga = injectSaga({ key: 'register', saga });

export default compose(
  withSaga,
  withConnect,
)(RegisterPage);
