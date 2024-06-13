import React, { useState } from 'react';
import { Square, CheckSquare } from 'react-bootstrap-icons';


function LeaderDefaultCardShown(props) {
    return (
        <>
            {props.cardUse ? <CheckSquare onClick={() => props.setCardUse(!props.cardUse)} className="position-absolute bottom-0 end-0" /> :
                <Square onClick={() => props.setCardUse(!props.cardUse)} className="position-absolute bottom-0 end-0" />}
        </>
    );
}

export default LeaderDefaultCardShown;