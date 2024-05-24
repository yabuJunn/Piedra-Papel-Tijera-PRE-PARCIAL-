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

    case Actions.UPDATE_PLAYER_2:
      return {
        ...currentState,
        player2: action.payload
      };

    case Actions.UPDATE_GAME_STATE:
      return {
        ...currentState,
        playing: action.payload
      };

    case Actions.UPDATE_TURN:
      return {
        ...currentState,
        currentTurn: action.payload
      };

    case Actions.UPDATE_PLAYER_TYPE:
      return {
        ...currentState,
        playerType: action.payload
      };

    case Actions.UPDATE_WINS:
      return {
        ...currentState,
        wins: action.payload
      };

    default:
      return currentState;
  }
};
