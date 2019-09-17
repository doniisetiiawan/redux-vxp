import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import qs from 'query-string';
import styled from 'styled-components';
import { Pagination } from 'antd';
import { createStructuredSelector } from 'reselect';
import {
  getCurrentPage,
  getDeleteItem,
  getTotalItem,
  getTotalPage,
  getUsers,
} from './selectors';
import Form from './Form';
import List from './List';
import { onRemoveRequest, onSearchRequest } from './actions';

const PaginationView = styled.div`
  margin: 40px 0;
`;

class User extends Component {
  componentDidMount() {
    const { onSubmit: onSubmit1, location } = this.props;
    onSubmit1(qs.parse(location.search));
  }

  componentWillReceiveProps(nextProps) {
    const newProps = qs.parse(nextProps.location.search);
    const { onSubmit: onSubmit1, location, deleting } = this.props;
    const oldProps = qs.parse(location.search);

    if (
      oldProps.s !== newProps.s
      || oldProps.page !== newProps.page
      || nextProps.deleting !== deleting
    ) {
      onSubmit1(newProps);
    }
  }

  onSubmit = (e) => {
    const { location, history } = this.props;
    history.push({
      search: qs.stringify({
        ...qs.parse(location.search),
        ...e.toJS(),
        page: 1,
      }),
      pathname: history.location.pathname,
    });
  };

  onChange = (page) => {
    const { location, history } = this.props;
    history.push({
      search: qs.stringify({
        ...qs.parse(location.search),
        page,
      }),
      pathname: history.location.pathname,
    });
  };

  render() {
    const {
      results,
      totalPage,
      totalItem,
      currentPage,
      location,
    } = this.props;
    const newProps = qs.parse(location.search);

    const { onSubmit: onSubmit1 } = this.props;
    const { onRemove } = this.props;
    return (
      <div className="all-user-containers">
        <Form onSubmit={this.onSubmit} initialValues={newProps} />
        <List
          dataSource={results}
          keyword={newProps.s}
          onRemove={onRemove}
          onReload={() => onSubmit1(newProps)}
        />
        <PaginationView>
          {totalPage > 0 && (
            <Pagination
              style={{ marginTop: 10 }}
              current={currentPage + 1}
              total={totalItem}
              pageSize={10}
              onChange={this.onChange}
            />
          )}
        </PaginationView>
      </div>
    );
  }
}

User.propTypes = {
  results: PropTypes.array,
  deleting: PropTypes.string,
  totalPage: PropTypes.number,
  totalItem: PropTypes.number,
  currentPage: PropTypes.number,
  onRemove: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export const mapStateToProps = createStructuredSelector({
  results: getUsers(),
  totalPage: getTotalPage(),
  totalItem: getTotalItem(),
  deleting: getDeleteItem(),
  currentPage: getCurrentPage(),
});

export const mapDispatchToProps = (dispatch) => ({
  onSubmit: (s) => dispatch(onSearchRequest(s)),
  onRemove: (s) => dispatch(onRemoveRequest(s)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User);
