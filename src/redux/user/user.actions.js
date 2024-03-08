import { userTypesActions } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userTypesActions.SET_CURRENT_USER,
  payload: user,
});
