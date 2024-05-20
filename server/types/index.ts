enum currentTurnType {
    player1 = "player1",
    player2 = "player2"
}

export interface databaseType {
    currentTurn: currentTurnType | undefined,
    player1: string,
    player2: string,
    win: boolean,
    playing: boolean,
}