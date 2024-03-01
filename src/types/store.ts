import { ScreensTypes } from "./screens";

export type Observer = HTMLElement & { render: () => void };

export interface Action {
  type: Actions;
  payload: string;
  reload: boolean
}

export enum Actions {
  "EXAMPLE_ACTION" = "EXAMPLE_ACTION",
}

export interface AppState {
  screen: ScreensTypes
  logedUser: {
    name: string,
    password: string
  },
  example: string
}
