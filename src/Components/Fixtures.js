import { Component } from "react";

import { ListGroup, Col, Row } from "react-bootstrap";

class Fixtures extends Component{

    render(){

        let fixtures = this.props.fixtures;

        return(
            <div className="fixtures">
                <ListGroup>
                    {fixtures.map((fixture) => (
                        <ListGroup.Item>
                            <Row>
                                <Col className="col-1">
                                <p className="status">{fixture.statusShort}</p>
                                </Col>
                                <Col className="text-center">
                                <p>{fixture.homeTeam.team_name}</p>
                                <img src={fixture.homeTeam.logo}/>
                                </Col>
                                <Col className="col-2">
                                <p className="score">{fixture.goalsHomeTeam} : {fixture.goalsAwayTeam}</p>
                                </Col>
                                <Col className="text-center">
                                <p>{fixture.awayTeam.team_name}</p>
                                <img src={fixture.awayTeam.logo}/>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}

                </ListGroup>
            </div>
        )
    }

}

export default Fixtures;
