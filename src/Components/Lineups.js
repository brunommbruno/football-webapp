import { Component } from "react";
import Lineup from "./Lineup";
import { Container, Row, Col } from "react-bootstrap";

class Lineups extends Component{


    render(){

        const { lineups, teamOne, teamTwo } = this.props;

        console.log(lineups);

        return(
            <Container>
            <div className="lineup">  
            <Row>
                <Lineup 
                    teamName={teamOne}
                    lineup={lineups[`${teamOne}`]}
                />
            </Row>
            <Row>
                <Lineup 
                    teamName={teamTwo}
                    lineup={lineups[`${teamTwo}`]}
                 />
            </Row>
            </div>
            </Container>
        )
    }

}

export default Lineups;
