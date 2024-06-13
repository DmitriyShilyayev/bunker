import React, { useState } from 'react';
import LeaderCardShown from './LeaderCardShown';
import LeaderCardHidden from './LeaderCardHidden';


function LeaderFearsCard(props) {
    const [cardShow, setCardShow] = useState(!props.leaderPlaying || props.playerIndex === 0 && !props.leaderStreaming);
    const [cardUse, setCardUse] = useState(false);
    return (
        <td className="position-relative">
            {cardShow ?
                <>
                    <p>{props.value[0]}</p>
                    <p>{props.value[1] ? "(Fear of " + props.value[1] + ")" : ''}</p>
                    <LeaderCardShown value={props.value} setCardUse={setCardUse} cardUse={cardUse} />
                </> :
                <LeaderCardHidden setCardUse={setCardUse} setCardShow={setCardShow} />}
        </td>
    );
}

export default LeaderFearsCard;