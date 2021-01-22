import { CollectionsBookmark } from "@material-ui/icons";
import { Component } from "react";
import axios from "../axios";
import DayTab from "./DayTab";
import HomeFixtures from "./HomeFixtures";
import LoadingAnim from "./LoadingAnim";

class Home extends Component{

    constructor(props){
        super(props);

        let today = new Date().toISOString().slice(0, 10)

        this.state = {
            fixtures: [],
            currentDate: `${today}`,
            loaded: false,
        }

        this.getRequest = this.getRequest.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

     getRequest(date){
         this.setState({loaded: false})
         axios.get(`/fixtures/date/${date}`).then(({data}) => {
             this.setState({fixtures: data.api.fixtures, loaded: true})
         })
     }

     changeDate(date){
         this.getRequest(date);
     }

     componentDidMount(){
         this.getRequest(this.state.currentDate);
     }

    render(){

        return(
            <div className="home">
                <DayTab 
                    changeDate={this.changeDate}
                />
                {/* Fixtures component will only load once get request has been sucessful */}
                {this.state.loaded ? 
                <HomeFixtures 
                    fixtures={this.state.fixtures}
                />
                :
                <LoadingAnim />
                }
            </div>
        )
    }
}

export default Home;
