import { SET_CURRENT_USER } from "../Types/Types";

export const setCurrentUser = text => ({
  type: SET_CURRENT_USER,
  payload: text,
});
