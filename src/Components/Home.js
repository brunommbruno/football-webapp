import { CollectionsBookmark } from "@material-ui/icons";
import { Component } from "react";
import axios from "../axios";
import DayTab from "./DayTab";
import Fixtures from "./Fixtures";

class Home extends Component{

    constructor(props){
        super(props);

        let today = new Date().toISOString().slice(0, 10)

        this.state = {
            fixtures: [],
            currentDate: `${today}`,
        }

        this.getRequest = this.getRequest.bind(this);
        this.changeDate = this.changeDate.bind(this);
    }

     getRequest(date){
         axios.get(`/fixtures/date/${date}`).then(({data}) => {
             this.setState({fixtures: data.api.fixtures})
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
                <Fixtures 
                    fixtures={this.state.fixtures}
                />
            </div>
        )
    }
}

export default Home;
