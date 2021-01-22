import { List } from "@material-ui/core";
import { Component } from "react";

import { ListGroup, Col, Row } from "react-bootstrap";

class HomeFixtures extends Component{

    render(){

        const fixtures = this.props.fixtures;

        const leagues = [
            {
                league_name: "Premier League", 
                fixtures: fixtures.filter(fixture => fixture.league_id == 2790),
                flag: "https://media.api-sports.io/flags/gb.svg",
                logo: "https://media.api-sports.io/football/leagues/39.png",
            },
            {
                league_name: "Primera Division",
                fixtures: fixtures.filter(fixture => fixture.league_id == 2833),
                flag: "https://media.api-sports.io/flags/es.svg",
                logo: "https://media.api-sports.io/football/leagues/140.png",
            },
            {
                league_name: "Ligue 1",
                fixtures: fixtures.filter(fixture => fixture.league_id == 2664),
                flag: "https://media.api-sports.io/flags/fr.svg",
                logo: "https://media.api-sports.io/football/leagues/61.png",
            },
            {
                league_name: "Serie A",
                fixtures: fixtures.filter(fixture => fixture.league_id == 2857),
                flag: "https://media.api-sports.io/flags/it.svg",
                logo: "https://media.api-sports.io/football/leagues/135.png",
            },
            {
                league_name: "Bundesliga",
                fixtures: fixtures.filter(fixture => fixture.league_id == 2755),
                flag: "https://media.api-sports.io/flags/de.svg",
                logo: "https://media.api-sports.io/football/leagues/78.png",
            },


        ]

        return(
            <div className="fixtures">

                {leagues.map((league) => (
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
                                        <p className="status">
                                            {fixture.statusShort}
                                        </p>
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
