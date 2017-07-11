import {
  PROFILE_CREATE,
  PROFILE_UPDATE,
  ADD_GENRE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  avatarSource: '',
  uploadURL: '',
  instrumentArray: [],
  genreArray: [],
  location: '',
  bio: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case ADD_GENRE:
      return {
        ...state,
        [action.payload.prop]: [...state.genreArray || [], action.payload.value]
      };
    case PROFILE_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
