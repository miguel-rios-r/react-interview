import { defaultUserData } from '../../session/DefaultUserData';
import { UPDATE_USER_DATA } from '../actions/Types'

const initialState = defaultUserData;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_USER_DATA:
      return {
        ...state,
        user: action.payload.name,
        pass: action.payload.pass
      }
    default:
      return state;
  }
}