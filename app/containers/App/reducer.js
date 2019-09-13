import { fromJS } from 'immutable';

const initialState = fromJS({
  loading: false,
  currentUser: {},
});

function appReducer(state = initialState) {
  return state;
}

export default appReducer;
