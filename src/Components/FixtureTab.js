import { Component } from "react";
import { Tabs, Tab } from "@material-ui/core";

class FixtureTab extends Component{

    render(){

        const { changeMenuSelection, menuSelected } = this.props;

        return(
            <Tabs
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            className="fixture-tab"
            >
            <Tab 
                label="Match Facts" 
                onClick={() => changeMenuSelection("match_facts")}
                className={(menuSelected === "match_facts" ? "selected" : null)}
            />
            <Tab 
                label="Stats" 
                onClick={() => changeMenuSelection("stats")}
                className={(menuSelected === "stats" ? "selected" : null)}
            />
            <Tab 
                label="Lineup" 
                onClick={() => changeMenuSelection("lineup")}
                className={(menuSelected === "lineup" ? "selected" : null)}
            />
        </Tabs>
        )
    }



}

export default FixtureTab;
