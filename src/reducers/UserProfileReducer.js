import {
  PROFILE_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS:
      console.log(action);
      return action.payload !== null ? action.payload : state;
    default:
      return state;

  }
};
