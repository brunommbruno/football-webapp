import { Component } from "react";
import axios from "../axios";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import {  Row, Col } from "react-bootstrap";
import LoadingAnim from "./LoadingAnim";
import FixtureTab from "./FixtureTab";
import Stats from "./Stats";

class Fixture extends Component{

    constructor(props){
        super(props);

        this.state = {
            fixture: [],
            loaded: false,
            menuSelected: "stats",
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
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                        </IconButton>
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
                        <p className="live-score">{fixture.goalsHomeTeam} - {fixture.goalsAwayTeam}</p>
                        <p>Full Time</p>
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
                <p>match facts</p>
                :
                menuSelected === "stats" ?
                <div className="stats">
                    <Stats 
                        statistics={fixture.statistics}
                    />
                </div>
                :
                menuSelected === "lineup" ?
                <p>lineup</p>
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
