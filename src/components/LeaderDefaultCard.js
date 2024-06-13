import React, { useState } from 'react';
import LeaderCardShown from './LeaderCardShown';
import LeaderCardHidden from './LeaderCardHidden';


function LeaderDefaultCard(props) {
    const [cardShow, setCardShow] = useState(!props.leaderPlaying || props.playerIndex === 0 && !props.leaderStreaming);
    const [cardUse, setCardUse] = useState(false);
    return (
        <td className="position-relative">
            {cardShow ?
                <>
                    <p>{props.value}</p>
                    <LeaderCardShown value={props.value} setCardUse={setCardUse} cardUse={cardUse} />
                </> :
                <LeaderCardHidden setCardUse={setCardUse} setCardShow={setCardShow} />}
        </td>
    );
}

export default LeaderDefaultCard;