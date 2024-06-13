import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import DisasterModal from '../components/DisasterModal';
import { getCardValue, getCardsValues, codeValues } from '../store/actions/cardsActions';
import LeaderDefaultCard from '../components/LeaderDefaultCard';
import LeaderSexAgeCard from '../components/LeaderSexAgeCard';
import LeaderHealthCard from '../components/LeaderHealthCard';
import LeaderFearsCard from '../components/LeaderFearsCard';
import LeaderActionCard from '../components/LeaderActionCard';
import LeaderGetPlayersCodes from '../components/LeaderGetPlayersCodes';


function LeaderCardsTable(props) {
    const playersRowsArray = [];
    const disasterCard = getCardValue('disaster', props.cards.disasterCard);
    const bunkerCapacity = Math.floor(props.game.playersAmount / 2) + props.game.bunkerCapacityChange
    props.cards.playersCards.forEach((element, index) => {
        const playerCards = getCardsValues(props.cards.playersCards[index]);
        let arrayHtml =
            <tr key={index}>
                <td>
                    {props.game.playersNames[index]}
                </td>
                <LeaderDefaultCard key='profession' value={playerCards['profession']} leaderPlaying={props.player.leaderPlaying} leaderStreaming={props.player.leaderStreaming} playerIndex={index} />
                <LeaderHealthCard value={playerCards['health']} leaderPlaying={props.player.leaderPlaying} leaderStreaming={props.player.leaderStreaming} playerIndex={index} />
                <LeaderSexAgeCard value={playerCards['sexAge']} leaderPlaying={props.player.leaderPlaying} leaderStreaming={props.player.leaderStreaming} playerIndex={index} />
                <LeaderDefaultCard key='skills' value={playerCards['skills']} leaderPlaying={props.player.leaderPlaying} leaderStreaming={props.player.leaderStreaming} playerIndex={index} />
                <LeaderDefaultCard key='personality' value={playerCards['personality']} leaderPlaying={props.player.leaderPlaying} leaderStreaming={props.player.leaderStreaming} playerIndex={index} />
                <LeaderDefaultCard key='hobby' value={playerCards['hobby']} leaderPlaying={props.player.leaderPlaying} leaderStreaming={props.player.leaderStreaming} playerIndex={index} />
                <LeaderFearsCard value={playerCards['fears']} leaderPlaying={props.player.leaderPlaying} leaderStreaming={props.player.leaderStreaming} playerIndex={index} />
                <LeaderActionCard
                    key='actionOne'
                    playersNames={props.game.playersNames}
                    playerIndex={index}
                    value={playerCards['actionOne']}
                    leaderPlaying={props.player.leaderPlaying}
                    leaderStreaming={props.player.leaderStreaming}
                    generateOneCard={props.generateOneCard}
                    generateOneCardForAll={props.generateOneCardForAll}
                    swapAllPlayersCards={props.swapAllPlayersCards}
                    swapTwoPlayersCards={props.swapTwoPlayersCards}
                    cureFear={props.cureFear}
                    cureHealth={props.cureHealth}
                    changeBunkerCapacity={props.changeBunkerCapacity} />
                <LeaderActionCard
                    key='actionTwo'
                    playersNames={props.game.playersNames}
                    playerIndex={index}
                    value={playerCards['actionTwo']}
                    leaderPlaying={props.player.leaderPlaying}
                    leaderStreaming={props.player.leaderStreaming}
                    generateOneCard={props.generateOneCard}
                    generateOneCardForAll={props.generateOneCardForAll}
                    swapAllPlayersCards={props.swapAllPlayersCards}
                    swapTwoPlayersCards={props.swapTwoPlayersCards}
                    cureFear={props.cureFear}
                    cureHealth={props.cureHealth}
                    changeBunkerCapacity={props.changeBunkerCapacity} />
            </tr>;
        playersRowsArray.push(arrayHtml);
    })

  
    return (
        <Container>
            <Row className="text-center">
                <Col className="pb-2 pt-2" xs={6} lg={2} xl={1} xxl={2}>
                    <h4 className="mb-0">Disaster</h4>
                </Col>
                <Col className="pb-2 pt-2" xs={6} lg={3} xl={2}>
                    <DisasterModal disaster={disasterCard} />
                </Col>
                <Col className="pb-2 pt-2" xs={6} lg={4} xl={3}>
                    <h4 className="mb-0">Recieve player codes</h4>
                </Col>
                <Col className="pb-2 pt-2" xs={6} lg={3} xl={2}>
                    <LeaderGetPlayersCodes playersNames={props.game.playersNames} playersCards={props.cards.playersCards} codeValues={codeValues} />
                </Col>
                <Col className="pb-2 pt-2" xs={6} lg={3} xxl={2}>
                    <h4 className="mb-0">Bunker capacity</h4>
                </Col>
                <Col className="pb-2 pt-2" xs={6} lg={1}>
                    {bunkerCapacity}
                </Col>
            </Row>
            <Row>
                <Table className="text-center" striped bordered size="sm" responsive>
                    <thead className="text-center">
                        <tr className="text-nowrap">
                            <th>Name</th>
                            <th>Profession</th>
                            <th>Health</th>
                            <th>Sex and Age</th>
                            <th>Skills</th>
                            <th>Personality</th>
                            <th>Hobby</th>
                            <th>Fears</th>
                            <th>Action One</th>
                            <th>Action Two</th>
                        </tr>
                    </thead>
                    <tbody>
                        {playersRowsArray}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

export default LeaderCardsTable;