import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Form from './Form';
import { onRegisterRequest } from './actions';

function RegisterPage(props) {
  const { onSubmit } = props;
  return (
    <div className="register-containers">
      <Form onSubmit={onSubmit} />
    </div>
  );
}

RegisterPage.propTypes = {
  onSubmit: PropTypes.func,
};

export const mapDispatchToProps = (dispatch) => ({
  onSubmit: (e) => dispatch(onRegisterRequest(e.toJS())),
});

const withConnect = connect(
  null,
  mapDispatchToProps,
);

  export default compose(withConnect)(RegisterPage);
