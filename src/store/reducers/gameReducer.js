import { START_GAME, SET_PLAYERS_AMOUNT, SET_PLAYERS_NAMES, CHANGE_BUNKER_CAPACITY } from '../actions/gameActions';

const initialState = {
    start: false,
    playersAmount: 0,
    playersNames: [],
    bunkerCapacityChange: 0,
};

export function gameReducer(state = initialState, action) {
    switch (action.type) {
        case START_GAME:
            return { ...state, start: true };

        case SET_PLAYERS_AMOUNT:
            return { ...state, playersAmount: action.payload };

        case SET_PLAYERS_NAMES:
            return { ...state, playersNames: action.payload };

        case CHANGE_BUNKER_CAPACITY:
            return { ...state, bunkerCapacityChange: (state.bunkerCapacityChange + action.payload) };

        default:
            return state;
    }
}