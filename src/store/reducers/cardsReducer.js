import { SET_CARDS_OBJECT, SET_USED_CARDS, SET_DISASTER_CARD, SET_PLAYERS_CARDS } from '../actions/cardsActions';

const initialState = {
    cardsLoaded: false,
    cardsObject: {},
    usedCards: {
        disaster: [],
        profession: [],
        health: [],
        sexAge: [],
        skills: [],
        personality: [],
        hobby: [],
        fears: [],
        actions: []
    },
    disasterCard: undefined,
    playersCards: [],
};

export function cardsReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CARDS_OBJECT:
            return { ...state, cardsLoaded: true, cardsObject: action.payload };

        case SET_USED_CARDS:
            return { ...state, usedCards: action.payload };

        case SET_DISASTER_CARD:
            return { ...state, disasterCard: action.payload };

        case SET_PLAYERS_CARDS:
            return { ...state, playersCards: action.payload };

        default:
            return state;
    }
}