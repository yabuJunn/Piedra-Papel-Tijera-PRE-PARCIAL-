export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: any,
  reload: boolean
}

export enum Actions {
  "UPDATE_MY_ID" = "UPDATE_MY_ID",
  "UPDATE_PLAYER_1" = "UPDATE_PLAYER_1",
  "UPDATE_PLAYER_2" = "UPDATE_PLAYER_2",
  "UPDATE_GAME_STATE" = "UPDATE_GAME_STATE"
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