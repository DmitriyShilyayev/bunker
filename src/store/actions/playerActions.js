export const SET_IS_LEADER = "player/SET_IS_LEADER";
export const SET_LEADER_PLAYING = "player/SET_LEADER_PLAYING";
export const SET_LEADER_STREAMING = "player/SET_LEADER_STREAMING";

export default function setLeader(value) {
    return {
        type: SET_IS_LEADER,
        payload: value,
    };
};

export function setLeaderPlaying(value) {
    return {
        type: SET_LEADER_PLAYING,
        payload: value,
    };
};

export function setLeaderStreaming(value) {
    return {
        type: SET_LEADER_STREAMING,
        payload: value,
    };
};