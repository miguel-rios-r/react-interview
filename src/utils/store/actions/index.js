import {
  UPDATE_USER_DATA
} from "./Types";

export const updateUserData = (username) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_USER_DATA, payload: { username: username } });
  }
};
