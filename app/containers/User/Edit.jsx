import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { FormattedHTMLMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import Form from './UserForm';
import Message from './messages';
import { onDetailRequest, onUpdateRequest } from './actions';
import { getUser } from './selectors';

class EditUser extends Component {
  componentDidMount() {
    const { match, onFetch } = this.props;
    onFetch(match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    const { match, onFetch } = this.props;
    if (match.params.id !== nextProps.match.params.id) {
      onFetch(nextProps.match.params.id);
    }
  }

  onSubmit = (e) => {
    const { match, history, onUpdate } = this.props;
    onUpdate(match.params.id, e.toJS(), () => history.push('/'));
  };

  render() {
    const { user } = this.props;

    return (
      <div className="add-user-containers">
        <Helmet>
          <title>
            Edit
            {user.name || ''}
          </title>
          <meta name="description" content={`Edit ${user.name || ''}`} />
        </Helmet>
        <Form
          initialValues={user}
          onSubmit={this.onSubmit}
          caption={(
            <FormattedHTMLMessage
              {...Message.editHeader}
              values={{ name: user.name }}
            />
)}
        />
      </div>
    );
  }
}

EditUser.propTypes = {
  user: PropTypes.object,
  onFetch: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  user: getUser(),
});

export const mapDispatchToProps = (dispatch) => ({
  onFetch: (id) => dispatch(onDetailRequest(id)),
  onUpdate: (id, item, cb) => dispatch(onUpdateRequest(id, item, cb)),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(EditUser),
);
