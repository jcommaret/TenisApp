import React, { Component } from 'react';
import data from "./data"; 

class Players extends Component {
	render() {
		return (
            <div>
                {
					data.players.map((player, i) => {
						return (
                            <div className='player' key={i}>
                                <img className='player-picture' src={player.picture} />
                                <div className="player-name">{player.firstname} {player.lastname}</div> 
                                <div className="player-rank">
                                    <span>Rank</span>
                                    <p>{player.data.rank}</p>
                                </div>

                                <div className="player-points">
                                    <span>Points</span>                               
                                    <p>{player.data.points}</p>
                                </div>

                                <div className="player-country">
                                    <span>Country</span>
                                    <p>{player.country.code}</p>
                                </div>
                            </div>
						);
					})
				}
            </div>
        );
    }
} 
export default Players;