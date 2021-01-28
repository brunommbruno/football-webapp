import { Component } from "react";

import { Container, Row, Col } from "react-bootstrap";
import SportsIcon from '@material-ui/icons/Sports';
import stadium from "../img/stadium.svg";
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';

class MatchFacts extends Component{

    render(){

        const { events, referee, venue, teamOne} = this.props;

        return(
            <div className="facts">
                <Container>
                    <Row className="footer">
                            <Col className="col-1"></Col>
                            <Col>
                                <div className="d-flex">
                                    <SportsIcon />
                                    <p>{referee ? referee : "N/A"}</p>
                                </div>
                            </Col>
                            <Col>
                                <div className="d-flex">
                                    <img src={stadium} />
                                    <p>{venue ? venue : "N/A"}</p>
                                </div>
                            </Col>
                        </Row>

                {events ? 
                <div className="events">
                    {events.map((event) => (
                        <Container>
                        {event.teamName === teamOne ?
                        <Row>
                            <Col className="col-1"><p>{event.elapsed}</p></Col>
                            <Col className="col-1">
                                {event.type === "Goal" ?
                                <SportsSoccerIcon className="goal"/>
                                :
                                event.detail === "Yellow Card" ? 
                                <img style={{marginTop:"0.7rem"}}src="https://svg-clipart.com/svg/yellow/6A3sbls-yellow-rectangle-vector.svg" />
                                :
                                event.detail === "Red Card" ?
                                <img style={{marginTop: "0.7rem"}}src="https://svg-clipart.com/svg/red/XHUU5Ea-red-rectangle-vertical-vector.svg"
                                /> 
                                :
                                event.type === "subst" ?
                                <img style={{marginTop: "1rem",height:"1rem"}}src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Substitution.svg" />
                                :
                                null
                            }
                            </Col>
                            <Col className="player col-5"><p>{event.player}</p></Col>
                        </Row> 
                            :
                        <Row className="d-flex justify-content-end away-team">
                            <Col className="player col-4"><p>{event.player}</p></Col>
                            <Col className="col-1">
                            {event.type === "Goal" ?
                                <SportsSoccerIcon className="goal"/>
                                :
                                event.detail === "Yellow Card" ? 
                                <img style={{marginTop:"0.7rem"}}src="https://svg-clipart.com/svg/yellow/6A3sbls-yellow-rectangle-vector.svg" />
                                :
                                event.detail === "Red Card" ?
                                <img style={{marginTop: "0.7rem"}}src="https://svg-clipart.com/svg/red/XHUU5Ea-red-rectangle-vertical-vector.svg"
                                /> 
                                :
                                event.type === "subst" ?
                                <img style={{marginTop: "1rem",height:"1rem"}}src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Substitution.svg" />
                                :
                                null
                            }
                            </Col>
                            <Col className="col-1"><p>{event.elapsed}</p></Col>
                        </Row>
                            }
                        </Container>
                    ))}
                </div>
                :
                <p className="text-center">No Match Facts Available Yet</p>
                }

                </Container>
            </div>
        )
    }

}

export default MatchFacts;
