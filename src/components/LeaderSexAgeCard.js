import React, { useState } from 'react';
import LeaderCardShown from './LeaderCardShown';
import LeaderCardHidden from './LeaderCardHidden';


function LeaderSexAgeCard(props) {
    const [cardShow, setCardShow] = useState(!props.leaderPlaying || props.playerIndex === 0 && !props.leaderStreaming);
    const [cardUse, setCardUse] = useState(false);
    return (
        <td className="position-relative">
            {cardShow ?
                <>
                    <p>Sex: {props.value[0]}</p>
                    <p>Age: {props.value[1]}</p>
                    <p>Sexuality: {props.value[2]}</p>
                    <LeaderCardShown value={props.value} setCardUse={setCardUse} cardUse={cardUse} />
                </> :
                <LeaderCardHidden setCardUse={setCardUse} setCardShow={setCardShow} />}
        </td>
    );
}

export default LeaderSexAgeCard;