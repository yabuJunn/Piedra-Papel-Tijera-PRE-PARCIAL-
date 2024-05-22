import { Action, Actions, AppState } from "../types/store";

export const reducer = (action: Action, currentState: AppState): AppState => {
  switch (action.type) {

    case Actions.UPDATE_MY_ID:
      return {
        ...currentState,
        myId: action.payload
      };

    case Actions.UPDATE_PLAYER_1:
      return {
        ...currentState,
        player1: action.payload
      };

    default:
      return currentState;
  }
};
