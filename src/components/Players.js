
import React, { Component } from 'react';

import data from "./data"; 

import Popup from "reactjs-popup";

class Players extends Component {
	render() {
		return (
            <div>
                {    
					data.players.map((player, i) => {
						return (
                            <Popup className='player' key={i} trigger={ 
                                <div className='player'>
                                    <img className='player-min' src={player.picture} alt="{player.firstname} {player.lastname}"/>
                                    <div className="player-name">{player.firstname} {player.lastname}</div> 
                                    <div className="datas">
                                        <div className="stat"><span>Rank</span><p>#{player.data.rank}</p></div>
                                        <div className="stat"><span>Points</span><p>{player.data.points}</p></div>
                                        <div className="stat"><span>Country</span><p>{player.country.code}</p></div>
                                    </div>
                                    
                                </div>}>
                                
                                <div class="popin-content-p">
                                    <img className='picture' src={player.picture} alt="{player.firstname} {player.lastname}"/>
                                    <div class="naming">
                                        <span className="firstname">{player.firstname}<br/><span className="lastname">{player.lastname}</span></span>
                                    </div>
                                    <div className="details">
                                        <div className="datas">
                                            <div className="stat"><span>Rank</span><p>#{player.data.rank}</p></div>
                                            <div className="stat"><span>Points</span><p>{player.data.points}</p></div>
                                            <div className="stat"><span>Country</span><p>{player.country.code}</p></div>
                                        </div>
                                        <div className='datas'>
                                            <div className="stat"><span>Age</span><p>{player.data.age}</p></div>
                                            <div className="stat"><span>Weight</span><p>{player.data.weight/1000} Kg</p></div>    
                                            <div className="stat"><span>Height</span><p>{player.data.height} cm</p></div>
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                            
            
        
                        );
					})
				}
            </div>
        );
    }
} 
export default Players;