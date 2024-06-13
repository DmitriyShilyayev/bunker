import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DisasterModal from '../components/DisasterModal';
import UpdatePlayerCards from '../components/UpdatePlayerCards';
import PlayerDefaultCard from '../components/PlayerDefaultCard';
import PlayerSexAgeCard from '../components/PlayerSexAgeCard';
import PlayerHealthCard from '../components/PlayerHealthCard';
import PlayerFearsCard from '../components/PlayerFearsCard';
import PlayerActionCard from '../components/PlayerActionCard';


function PlayerCardsTable(props) {
    return (
        <Container>
            <Row className="border-bottom mb-3 text-lg-center">
                <Col className="pb-2 pt-2" xs={6} lg={3}>
                    <h4 className="mb-0">Disaster</h4>
                </Col>
                <Col className="pb-2 pt-2" xs={6} lg={3}>
                    <DisasterModal disaster={props.disaster} />
                </Col>
                <Col className="border-lg-start pb-2 pt-2" xs={6} lg={3}>
                    <h4 className="mb-0">Update Cards</h4>
                </Col>
                <Col className="pb-2 pt-2 " xs={6} lg={3}>
                    <UpdatePlayerCards setPlayersCards={props.setPlayersCards} />
                </Col>
            </Row>
            <Row className="mb-3 g-1">
                <Col className="mb-1" xs={12} lg={3} xl={2}>
                    <PlayerSexAgeCard sexAge={props.sexAge} />
                </Col>
                <Col className="mb-1" xs={6} md={4} lg={3} xl={2}>
                    <PlayerDefaultCard key="profession" title="Profession" value={props.profession} />
                </Col>
                <Col className="mb-1" xs={6} md={4} lg={3} xl={2}>
                    <PlayerHealthCard health={props.health} />
                </Col>
                <Col className="mb-1" xs={6} md={4} lg={3} xl={2}>
                    <PlayerDefaultCard key="skills" title="Skills" value={props.skills} />
                </Col>
                <Col className="mb-1" xs={6} md={4} lg={3} xl={2}>
                    <PlayerDefaultCard key="personality" title="Personality" value={props.personality} />
                </Col>
                <Col className="mb-1" xs={6} md={4} lg={3} xl={2}>
                    <PlayerDefaultCard key="hobby" title="Hobby" value={props.hobby} />
                </Col>
                <Col className="mb-1" xs={6} md={4} lg={3} xl={2}>
                    <PlayerFearsCard fears={props.fears} />
                </Col>
                <Col className="px-1 mb-1" xs={12} md={6} xl={5}>
                    <PlayerActionCard key="actionOne" title="Action One" action={props.actionOne} />
                </Col>
                <Col className="px-1 mb-1" xs={12} md={6} xl={5}>
                    <PlayerActionCard key="actionTwo" title="Action Two" action={props.actionTwo} />
                </Col>
            </Row>
        </Container>
    );
}

export default PlayerCardsTable;