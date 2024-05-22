import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {
    case Actions.UPDATE_MY_ID:
      return {
        ...currentState,
        myId: action.payload
      };
    default:
      return currentState;
  }
};
