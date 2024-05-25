import { createClient } from "@supabase/supabase-js";
import { databaseType } from "../types";
import { database } from "../dataBase";

const supabase = createClient('https://riefnfdespallvdifazr.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpZWZuZmRlc3BhbGx2ZGlmYXpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM0NzI5MjEsImV4cCI6MjAyOTA0ODkyMX0.kD2i7UK2CqUtwXUhh63-t0zJ0cI24dpIwdh53qhlVEM')

export async function updateStore(database: databaseType) {
    console.log("Actualizar base de datos")
    const { error } = await supabase
        .from('piedraPapelTijera')
        .update(database)
        .eq('id', 2)
    if (error) {
        console.log(error)
    }
}

export async function getStore() {
    const { data, error } = await supabase
        .from('piedraPapelTijera')
        .select()
        .eq('id', 2)
    console.log(data)
    if (data) {
        database.currentTurn = data[0].currentTurn
        // database.player1 = data[0].player1
        // database.player2 = data[0].player2
        database.win = data[0].win
        database.playing = data[0].playing
        database.player1Wins = data[0].player1Wins
        database.player2Wins = data[0].player2Wins
        database.player1Move = data[0].player1Move
        database.player2Move = data[0].player2Move
    }
}

interface supabaseStore {
    id: number,
    created_at: string,
    currentTurn: null | string,
    player1: string,
    player2: string,
    win: boolean,
    playing: boolean,
    player1Wins: null | string,
    player2Wins: null | string,
    player1Move: null | string,
    player2Move: null | string
}