import { Action, AppState, Observer } from "../types/store";
import { reducer } from "./reducer";

const observers: Observer[] = [];

export let state: AppState = {
    currentTurn: undefined,
    player1: undefined,
    player2: undefined,
    win: false,
    playing: false,
    myId: undefined,
    playerType: undefined
};

export const dispatch = (action: Action) => {
    const clone = JSON.parse(JSON.stringify(state));
    state = reducer(action, clone);
    if (action.reload === true) {
        observers.forEach((o) => o.render());
    }
    console.log("AppState")
    console.log(state)
};

export const addObserver = (observer: Observer) => {
    observers.push(observer);
};
