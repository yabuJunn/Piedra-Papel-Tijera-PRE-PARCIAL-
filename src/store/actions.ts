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
  type: Actions.UPDATE_PLAYER_1,
  payload,
  reload
});