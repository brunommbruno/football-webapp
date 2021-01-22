import { List } from "@material-ui/core";
import { Component } from "react";
import  {LeagueObjs} from "./LeagueObjs";

import { ListGroup, Col, Row, Badge } from "react-bootstrap";

class HomeFixtures extends Component{

    render(){

        const fixtures = this.props.fixtures;

        LeagueObjs.forEach(league => {
            let fixtures_filtered = fixtures.filter(fixture => fixture.league_id == league.league_id);

            league.fixtures = fixtures_filtered;
        });

        return(
            <div className="fixtures">

                {LeagueObjs.map((league) => (
                    //if league has no features it does not go through the loop
                    (league.fixtures[0] ? 
                    <ListGroup className="league-group">
                        <ListGroup.Item style={{paddingTop: "0.3rem"}}>
                            <Row className="league-title">
                                <img style={{height: "1rem"}} src={league.logo} alt="league logo"/>
                                <p> - {league.league_name}</p>
                            </Row>
                        </ListGroup.Item>
                        {league.fixtures.map((fixture) => (
                            <ListGroup.Item>
                                <Row>
                                    <Col className="col-1">
                                            {fixture.statusShort === "FT" ? 
                                                <Badge  className="status-ft">FT</Badge>
                                                :
                                                fixture.statusShort === "NS" ?
                                                <Badge></Badge>
                                                :
                                                <Badge className="status-on blink">{fixture.elapsed}</Badge>
                                            }
                                    </Col>
                                    <Col className="text-center col-4">
                                        <p>{fixture.homeTeam.team_name}</p>
                                        <img src={fixture.homeTeam.logo} alt="home team logo"/>
                                    </Col>
                                    <Col className="col-2">
                                        <p className="score">
                                            {fixture.goalsHomeTeam != null ?
                                            `${fixture.goalsHomeTeam} : ${fixture.goalsAwayTeam}`
                                            :
                                            `${fixture.event_date.slice(11, 16)}` 
                                        }
                                        </p>
                                    </Col>
                                    <Col className="text-center col-4">
                                    <p>{fixture.awayTeam.team_name}</p>
                                    <img src={fixture.awayTeam.logo}/>
                                    </Col>
                                    <Col className="col-1">
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup> : null)
                ))}  

            </div>
        )
    }

}

export default HomeFixtures;
