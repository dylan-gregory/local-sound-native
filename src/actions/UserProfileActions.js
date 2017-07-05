import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PROFILE_CREATE,
  PROFILE_UPDATE,
  PROFILE_FETCH_SUCCESS
} from './types';

export const userProfileCreate = ({ name, phone, bio, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profileInfo`)
      .push({ name, phone, bio })
      .then(() => {
        dispatch({ type: PROFILE_CREATE });
        Actions.user_home({ type: 'reset' });
      });
  };
};

export const userProfileUpdate = ({ prop, value }) => {
  return {
    type: PROFILE_UPDATE,
    payload: { prop, value }
  };
};

// imgUrl, instrumentArray, genreArray, bio

export const userProfileFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profileInfo`)
      .on('value', snapshot => {
        dispatch({ type: PROFILE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
