export interface databaseType {
    currentTurn: string | undefined,
    player1: string,
    player2: string,
    win: boolean,
    playing: boolean,
    player1Wins: number | undefined,
    player2Wins: number | undefined,
    player1Move: string | undefined,
    player2Move: string | undefined
}