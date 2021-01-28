import { Component } from "react";
import axios from "../axios";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import {  Row, Col, Badge } from "react-bootstrap";
import LoadingAnim from "./LoadingAnim";
import FixtureTab from "./FixtureTab";
import Stats from "./Stats";
import Lineups from "./Lineups";
import MatchFacts from "./MatchFacts";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

class Fixture extends Component{

    constructor(props){
        super(props);

        this.state = {
            fixture: [],
            loaded: false,
            menuSelected: "match_facts",
        }

        this.getRequest = this.getRequest.bind(this);
        this.changeMenuSelection = this.changeMenuSelection.bind(this);
    }

    getRequest(){
        axios.get(`/fixtures/id/${this.props.id}`).then(({data}) => {
            this.setState({fixture:data.api.fixtures[0], loaded: true})
        })
    }

    changeMenuSelection(menu){
        this.setState({menuSelected: menu});
    }

    componentDidMount(){
        this.getRequest();
    }

    render(){

        const { fixture, loaded, menuSelected } = this.state;

        console.log(fixture)

        return(
            <div className="fixture">

                <AppBar position="static" className="appbar">
                    <Toolbar>
                        <KeyboardBackspaceIcon 
                            onClick={() => window.history.back()}
                            className="mr-3"
                            style={{fontSize:"2rem"}}
                        />
                        <Typography variant="h6">
                            Match
                        </Typography>
                    </Toolbar>
                </AppBar>

            {!loaded ? <LoadingAnim /> : 
                <>
                <Row className="score">
                    <Col className="home-team">
                        <img src={fixture.homeTeam.logo} alt="home team logo"/>
                        <p>{fixture.homeTeam.team_name}</p>
                    </Col>
                    <Col>
                        <p className="live-score">
                            {fixture.statusShort === "NS" ? 
                            `${fixture.event_date.slice(11, 16)}`
                            :
                            fixture.goalsHomeTeam === null ?
                            `0 - 0`
                            :
                            `${fixture.goalsHomeTeam} - ${fixture.goalsAwayTeam}`
                            }
                        </p>
                        <p>{fixture.statusShort === "FT" ? "Full Time" :
                            fixture.statusShort === "HT" ? "Half Time" :
                            fixture.statusShort === "NS" ? "Not Started" :
                            <Badge className="blink text-white">{fixture.elapsed}</Badge>
                        }</p>
                    </Col>
                    <Col className="away-team">
                        <img src={fixture.awayTeam.logo} alt="away team logo" />
                        <p>{fixture.awayTeam.team_name}</p>
                    </Col>
                </Row>
                
                <FixtureTab 
                    changeMenuSelection={this.changeMenuSelection} 
                    menuSelected={menuSelected}
                />

                {menuSelected === "match_facts" ?
                <MatchFacts 
                    events={fixture.events}
                    referee={fixture.referee}
                    venue={fixture.venue}
                    teamOne={fixture.homeTeam.team_name}
                    teamTwo={fixture.awayTeam.team_name}
                />
                :
                menuSelected === "stats" ?
                <div className="stats">
                    {/* Stats component will break if statistics are not available yet */}
                    {fixture.statistics ?
                    <Stats 
                        statistics={fixture.statistics}
                    />
                    :
                    <p>No Statistics Available Yet</p>
                    }
                </div>
                :
                menuSelected === "lineup" ?
                <>
                    {fixture.lineups ? 
                        <div className="lineup">
                    <Lineups 
                        lineups={fixture.lineups}
                        teamOne={fixture.homeTeam.team_name}
                        teamTwo={fixture.awayTeam.team_name}
                    />
                    </div>
                    :
                    <p className="text-center mt-4">No Lineup Available Yet</p>    
                    }
                </>
                :
                null
            }
                </>
            }

            </div>
        )
    }

}

export default Fixture;
