import { Component } from "react";

import { Tabs, Tab } from "@material-ui/core";

class DayTab extends Component{


    render(){

        const { changeDate } = this.props;

        //unformatted current date
        var today = new Date();
        //yesterday
        var dateYesterday = new Date(today);
        dateYesterday.setDate(today.getDate() - 1);
        const dateYesterdayFormat = dateYesterday.toJSON().slice(0,10).replace(/-/g,'-');
        //today
        const dateToday = today.toJSON().slice(0,10).replace(/-/g,'-');
        //Tomorrow
        var dateTomorrow = new Date(today);
        dateTomorrow.setDate(today.getDate() + 1);
        const dateTomorrowFormat = dateTomorrow.toJSON().slice(0,10).replace(/-/g,'-');

        return(

                <Tabs
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    className="day-tab"
                    style={{marginTop: "3.5rem"}}
                >
                    <Tab label="Yesterday" onClick={() => changeDate(`${dateYesterdayFormat}`)}/>
                    <Tab label="Today" onClick={() => changeDate(`${dateToday}`)}/>
                    <Tab label="Tomorrow" onClick={() => changeDate(`${dateTomorrowFormat}`)}/>
                </Tabs>
        )
    }
}

export default DayTab;