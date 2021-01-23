import { Component } from "react";
import { Container, Row, Col, Badge} from "react-bootstrap";

class Stats extends Component{

    render(){
        const { statistics } = this.props;

        return(
            <Container>
                    <Row>
                        <Col>
                        <Badge>{statistics["Ball Possession"].home}</Badge>
                        </Col>
                        <Col><p>Possession</p>
                        </Col>
                        <Col>
                        <Badge>{statistics["Ball Possession"].away}</Badge>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Badge>{statistics["Total Shots"].home}</Badge>
                        </Col>
                        <Col><p>Total Shots</p>
                        </Col>
                        <Col>
                        <Badge>{statistics["Total Shots"].away}</Badge>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Badge>{statistics["Shots on Goal"].home}</Badge>
                        </Col>
                        <Col><p>On Target</p>
                        </Col>
                        <Col>
                        <Badge>{statistics["Shots on Goal"].away}</Badge>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Badge>{statistics["Total passes"].home}</Badge>
                        </Col>
                        <Col><p>Total Passes</p>
                        </Col>
                        <Col>
                        <Badge>{statistics["Total passes"].away}</Badge>
                        </Col>
                    </Row>
            </Container>
        )
    }

}

export default Stats;
