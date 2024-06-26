import { Action, Actions } from "../types/store";

export const updateMyId = (payload: string | undefined, reload: boolean): Action => ({
  type: Actions.UPDATE_MY_ID,
  payload,
  reload
});

export const updatePlayer1 = (payload: string | undefined, reload: boolean): Action => ({
  type: Actions.UPDATE_PLAYER_1,
  payload,
  reload
});

export const updatePlayer2 = (payload: string | undefined, reload: boolean): Action => ({
  type: Actions.UPDATE_PLAYER_2,
  payload,
  reload
});

export const updateGameState = (payload: undefined | boolean, reload: boolean): Action => ({
  type: Actions.UPDATE_GAME_STATE,
  payload,
  reload
});

export const updateTurn = (payload: undefined | boolean, reload: boolean): Action => ({
  type: Actions.UPDATE_TURN,
  payload,
  reload
});

export const updatePlayerType = (payload: undefined | boolean, reload: boolean): Action => ({
  type: Actions.UPDATE_PLAYER_TYPE,
  payload,
  reload
});

export const updateWins = (payload: undefined | boolean, reload: boolean): Action => ({
  type: Actions.UPDATE_WINS,
  payload,
  reload
});