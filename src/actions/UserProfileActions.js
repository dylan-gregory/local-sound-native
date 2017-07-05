import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  PROFILE_UPDATE,
  PROFILE_FETCH_SUCCESS
} from './types';

export const userProfileUpdate = ({ name, phone, imgUrl, instrumentArray, genreArray, bio, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profileInfo`)
      .set({ name, phone, imgUrl, instrumentArray, genreArray, bio })
      .then(() => {
        dispatch({ type: PROFILE_UPDATE });
        Actions.user_home({ type: 'reset' });
      });
  };
};
