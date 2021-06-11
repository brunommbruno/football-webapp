import { Component } from "react";
import axios from "../axios";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DayTab from "./DayTab";
import HomeFixtures from "./HomeFixtures";
import LoadingAnim from "./LoadingAnim";

class Home extends Component {
  constructor(props) {
    super(props);

    const day = new Date();
    const today = day.toISOString().slice(0, 10);
    const hour = day.getHours();
    const min = day.getMinutes();

    this.state = {
      fixtures: [],
      currentDate: `${today}`,
      currentTime: `${hour}:${min}`,
      loaded: false,
    };

    this.getRequest = this.getRequest.bind(this);
    this.changeDate = this.changeDate.bind(this);
  }

  getRequest(date) {
    this.setState({ loaded: false });
    axios.get(`/fixtures/date/${date}`).then(({ data }) => {
      this.setState({ fixtures: data.api.fixtures, loaded: true });
    });
  }

  changeDate(date) {
    this.getRequest(date);
  }

  componentDidMount() {
    this.getRequest(this.state.currentDate);
  }

  render() {
    return (
      <div className="home">
        <AppBar position="static" className="appbar">
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
            ></IconButton>
            <Typography variant="h6">Home</Typography>
          </Toolbar>
        </AppBar>
        <DayTab changeDate={this.changeDate} />
        {/* <h1 className="text-center">will be back for next football season!</h1> */}
        {/* Fixtures component will only load once get request has been sucessful */}
        {this.state.loaded ? (
          <HomeFixtures fixtures={this.state.fixtures} />
        ) : (
          <LoadingAnim />
        )}
      </div>
    );
  }
}

export default Home;
