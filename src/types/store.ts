export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: any,
  reload: boolean
}

export enum Actions {
  "UPDATE_MY_ID" = "UPDATE_MY_ID",
  "UPDATE_ROOM_ID" = "UPDATE_ROOM_ID",
  "UPDATE_USER_ID" = "UPDATE_USER_ID",
  "UPDATE_OUTSIDE_USER_ID" = "UPDATE_OTHER_USER_ID",
  "UPDATE_INSIDE_USER_ID" = "UPDATE_INHER_USER_ID"
}

export interface AppState {
  currentTurn: undefined | string,
  player1: string | undefined,
  player2: string | undefined,
  win: boolean,
  playing: boolean,
  myId: string | undefined
}

interface user {
  id: string,
  name: string
}

interface clothes {
  name: string,
  id: string,
  image: string
}