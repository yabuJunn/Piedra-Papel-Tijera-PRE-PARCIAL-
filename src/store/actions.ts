import { Action, Actions } from "../types/store";

export const exampleAction = (payload: string, reload: boolean): Action => ({
  type: Actions.EXAMPLE_ACTION,
  payload,
  reload
});
