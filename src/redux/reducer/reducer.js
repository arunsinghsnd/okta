import { SET_CURRENT_USER } from "../Types/Types";

const initialState = {
  name: "Arun Kumar Singh",
};

export const showName = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
