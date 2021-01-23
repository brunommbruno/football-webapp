import { Component } from "react";
import { Container, Row, Col, Badge} from "react-bootstrap";

class Stats extends Component{

    render(){
        const { statistics } = this.props;

        //Array so possible to loop through specified statistics
        let ordered = [
            ["Possession", statistics["Ball Possession"]],
            ["Total Shots",statistics["Total Shots"]],
            ["On Target",statistics["Shots on Goal"]],
            ["Total Passes",statistics["Total passes"]],
            ["Corners",statistics["Corner Kicks"]],
            ["Fouls",statistics["Fouls"]],
            ["Offsides",statistics["Offsides"]],
            ["Yellow Cards",statistics["Yellow Cards"]],
            ["Red Cards",statistics["Red Cards"]]
        ]

        console.log(statistics)

        return(
            <Container>
                {ordered.map((stat) => (

                <Row>
                    <Col>
                        <Badge>
                            {stat[1].home === null ? 
                            "N/A"
                            :
                            stat[1].home
                            }
                        </Badge>
                    </Col>
                    <Col>
                        <p>{stat[0]}</p>
                    </Col>
                    <Col>
                        <Badge>
                            {stat[1].away === null ? 
                            "N/A"
                            :
                            stat[1].away
                            }
                        </Badge>
                    </Col>
                </Row>

                ))}

                    <Row style={{marginTop: "3rem"}}>
                    </Row>
            </Container>
        )
    }

}

export default Stats;
