import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './reducerInjectors';

export default ({ key, reducer }) => (WrappedComponent) => {
  class ReducerInjector extends React.Component {
    static WrappedComponent = WrappedComponent;

    // eslint-disable-next-line react/static-property-placement
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };

    // eslint-disable-next-line react/static-property-placement
    static displayName = `withReducer(${WrappedComponent.displayName
      || WrappedComponent.name
      || 'Component'})`;

    // eslint-disable-next-line react/destructuring-assignment
    injectors = getInjectors(this.context.store);

    componentWillMount() {
      const { injectReducer } = this.injectors;

      injectReducer(key, reducer);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
