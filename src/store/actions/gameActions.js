export const START_GAME = "game/START_GAME";
export const SET_PLAYERS_AMOUNT = "game/SET_PLAYERS_AMOUNT";
export const SET_PLAYERS_NAMES = "game/SET_PLAYERS_NAMES";
export const CHANGE_BUNKER_CAPACITY = "game/CHANGE_BUNKER_CAPACITY";

export default function startGame(vaue) {
    return {
        type: START_GAME
    };
};

export function setPlayersAmount(value) {
    return {
        type: SET_PLAYERS_AMOUNT,
        payload: value
    };
};

export function setPlayersNames(value) {
    return {
        type: SET_PLAYERS_NAMES,
        payload: value
    };
};

export function changeBunkerCapacity(value) {
    return {
        type: CHANGE_BUNKER_CAPACITY,
        payload: value
    };
};