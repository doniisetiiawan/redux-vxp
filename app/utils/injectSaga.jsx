import React from 'react';
import PropTypes from 'prop-types';
import hoistNonReactStatics from 'hoist-non-react-statics';

import getInjectors from './sagaInjectors';

export default ({ key, saga, mode }) => (WrappedComponent) => {
  class InjectSaga extends React.Component {
    static WrappedComponent = WrappedComponent;

    // eslint-disable-next-line react/static-property-placement
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };

    // eslint-disable-next-line react/static-property-placement
    static displayName = `withSaga(${WrappedComponent.displayName
      || WrappedComponent.name
      || 'Component'})`;

    // eslint-disable-next-line react/destructuring-assignment
    injectors = getInjectors(this.context.store);

    componentWillMount() {
      const { injectSaga } = this.injectors;

      injectSaga(key, { saga, mode }, this.props);
    }

    componentWillUnmount() {
      const { ejectSaga } = this.injectors;

      ejectSaga(key);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return hoistNonReactStatics(InjectSaga, WrappedComponent);
};
