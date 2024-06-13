import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { InfoCircle } from 'react-bootstrap-icons';
import Popover from 'react-bootstrap/Popover';

function LeaderActionCardDetails(props) {
    const renderTooltip = (props) => (
        <Popover id="button-popover" {...props}>
            <Popover.Header as="h3">{props.title}</Popover.Header>
            <Popover.Body>
                {props.description}
            </Popover.Body>
        </Popover>
    );
    return (
        <OverlayTrigger
            className="text-nowrap"
            placement="left"
            delay={{ show: 250, hide: 400 }}
            overlay={renderTooltip(props)}
        >
            <InfoCircle />
        </OverlayTrigger>
    );
}

export default LeaderActionCardDetails;