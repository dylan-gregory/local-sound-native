import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PROFILE_CREATE,
  PROFILE_UPDATE,
  PROFILE_FETCH_SUCCESS
} from './types';

export const userProfileUpdate = ({ prop, value }) => {
  return {
    type: PROFILE_UPDATE,
    payload: { prop, value }
  };
};

export const userProfileCreate = ({ name, phone, bio, uploadURL, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profileInfo`)
      .set({ name, phone, bio, uploadURL })
      .then(() => {
        dispatch({ type: PROFILE_CREATE });
        Actions.user_home({ type: 'reset' });
      });
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
