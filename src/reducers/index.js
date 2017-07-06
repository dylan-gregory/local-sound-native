import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import UserProfileFormReducer from './UserProfileFormReducer';
import UserProfileReducer from './UserProfileReducer';

export default combineReducers({
  auth: AuthReducer,
  userProfileInfo: UserProfileFormReducer,
  profileInfo: UserProfileReducer
});
