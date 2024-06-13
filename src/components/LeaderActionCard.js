import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import LeaderActionCardDetails from './LeaderActionCardDetails';
import LeaderActionCardUse from './LeaderActionCardUse';
import LeaderCardHidden from './LeaderCardHidden';

function LeaderActionCard(props) {
    const [cardShow, setCardShow] = useState(!props.leaderPlaying || props.playerIndex === 0 && !props.leaderStreaming);
    const [cardUse, setCardUse] = useState(false);
    return (
        <td className="position-relative">
            {cardShow ?
                <>
                    <p>{props.value[0]}</p>
                    <LeaderActionCardDetails title={props.value[0]} description={props.value[1]} />
                    {props.value[2] ? <LeaderActionCardUse
                        setCardState={() => setCardUse(true)}
                        cardState={cardUse}
                        playersNames={props.playersNames}
                        generateOneCard={props.generateOneCard}
                        generateOneCardForAll={props.generateOneCardForAll}
                        swapAllPlayersCards={props.swapAllPlayersCards}
                        swapTwoPlayersCards={props.swapTwoPlayersCards}
                        cureFear={props.cureFear}
                        cureHealth={props.cureHealth}
                        changeBunkerCapacity={props.changeBunkerCapacity}
                        value={[props.value[3], props.value[4], props.value[5]]}
                        playerIndex={props.playerIndex} /> :
                        <Button
                            className="w-100 mt-3 text-nowrap"
                            variant={cardUse ? "secondary" : "dark"}
                            onClick={() => setCardUse(!cardUse)}>
                            {cardUse ? "Card used" : "Use card"}
                        </Button>}
                </> :
                <LeaderCardHidden setCardUse={false} setCardShow={setCardShow} />}
        </td>
    );
}

export default LeaderActionCard;