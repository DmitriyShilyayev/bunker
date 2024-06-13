import { SET_IS_LEADER, SET_LEADER_PLAYING, SET_LEADER_STREAMING } from '../actions/playerActions';

const initialState = {
    leader: false,
    leaderPlaying: false,
    leaderStreaming: false,
};

export function playerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_IS_LEADER:
            return { ...state, leader: action.payload };

        case SET_LEADER_PLAYING:
            return { ...state, leaderPlaying: action.payload };

        case SET_LEADER_STREAMING:
            return { ...state, leaderStreaming: action.payload };

        default:
            return state;
    }
}