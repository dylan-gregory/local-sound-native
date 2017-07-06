import {
  PROFILE_CREATE,
  PROFILE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  // imgUrl: '',
  // instrumentArray: [],
  // genreArray: [],
  bio: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_UPDATE:
      return { ...state, [action.payload.prop]:action.payload.value };
    case PROFILE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
