import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { gameReducer } from './gameReducer';
import { playerReducer } from './playerReducer';

export const rootReducer = combineReducers({
    cards: cardsReducer,
    game: gameReducer,
    player: playerReducer,
});