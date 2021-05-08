import { Component } from "react";

import axios from "../axios";
import { Col } from "react-bootstrap";

class League extends Component {
  constructor(props) {
    super(props);

    this.state = {
      league: [],
      loaded: false,
    };

    this.getRequest = this.getRequest.bind(this);
  }

  getRequest() {
    axios
      .get(
        `https://api-football-v1.p.rapidapi.com/v2/leagueTable/${this.props.id}`
      )
      .then(({ data }) => {
        this.setState({ league: data.api.standings[0], loaded: true });
      });
  }

  componentDidMount() {
    this.getRequest();
  }

  render() {
    return (
      <>
        <h1>{this.props.id}</h1>
        {!this.state.loaded ? (
          <p>loading</p>
        ) : (
          <>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                color: "black",
                fontSize: "0.8rem",
              }}
            >
              <Col xs={7}>
                <p>Team</p>
              </Col>

              <Col xs={1}>
                <p> Pl</p>
              </Col>
              <Col xs={1}>
                <p>W</p>
              </Col>
              <Col xs={1}>
                <p>D</p>
              </Col>
              <Col xs={1}>
                <p>L</p>
              </Col>
              <Col xs={1}>
                <p>P</p>
              </Col>
            </div>

            {this.state.league.map((standing) => (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  color: "black",
                  borderBottom: "2px solid rgba(184, 184, 184, 0.308)",
                  padding: "0.3rem",
                  fontSize: "0.8rem",
                }}
              >
                <Col xs={1}>
                  <p>{standing.rank}</p>
                </Col>
                <Col xs={1}>
                  <img
                    style={{ height: "1.5rem" }}
                    src={standing.logo}
                    alt="club logo"
                  />
                </Col>
                <Col xs={5} style={{ whiteSpace: "nowrap" }}>
                  <p style={{}}>{standing.teamName}</p>
                </Col>
                <Col xs={1}>
                  <p> {standing.all.matchsPlayed}</p>
                </Col>
                <Col xs={1}>
                  <p>{standing.all.win}</p>
                </Col>
                <Col xs={1}>
                  <p>{standing.all.draw}</p>
                </Col>
                <Col xs={1}>
                  <p>{standing.all.lose}</p>
                </Col>
                <Col xs={1}>
                  <p>{standing.points}</p>
                </Col>
              </div>
            ))}
          </>
        )}
      </>
    );
  }
}

export default League;
