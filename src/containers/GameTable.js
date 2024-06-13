import React, { Component } from 'react';
import { connect } from 'react-redux';
import LeaderScreen from './LeaderScreen';
import PlayerScreen from './PlayerScreen';


class GameTable extends Component {
    render() {
        const { player } = this.props;
        return (
            <>
                {player.leader ? <LeaderScreen /> : <PlayerScreen/>}
            </>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        player: store.player,
    };
};

export default connect(mapStateToProps)(GameTable);