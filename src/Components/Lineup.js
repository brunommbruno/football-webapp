import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class Lineup extends Component{


    render(){

        const { teamName, lineup } = this.props;

        return(
            <>  
                <Col>
                    <h2 className="text-center">{teamName} <span className="formation">({lineup.formation})</span><span className="manager">{lineup.coach}</span></h2>

                    <div className="team-players">
                        {lineup.startXI.map((player) => (
                            <p>
                                {player.pos} | 
                                <span className="player-name">
                                    {player.player} 
                                </span>
                                <span className="player-number">
                                    {player.number}
                                </span>
                            </p>
                        ))}
                    </div>
                </Col>
            
            </>
        )
    }

}

export default Lineup;
