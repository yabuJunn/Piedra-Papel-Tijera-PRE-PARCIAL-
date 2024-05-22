import { Action, Actions } from "../types/store";

export const updateMyId = (payload: string | undefined, reload: boolean): Action => ({
  type: Actions.UPDATE_MY_ID,
  payload,
  reload
});