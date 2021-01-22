import { Component } from "react";

import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import PublicIcon from '@material-ui/icons/Public';
import SettingsIcon from '@material-ui/icons/Settings';


class Navbar extends Component{

    constructor(props){
        super(props)

        this.state = {
            selected: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value){
        this.setState({selected: value});
        window.location.href = `#/${value}`;
    }

    render(){

        const { selected } = this.state;
        //needed to overwrite styling
        const selectedStyle = {borderTop: "2px solid teal"}

        return(
            <BottomNavigation className="navbar" style={{overflow: "hidden", position: "fixed", bottom: "0"}}>
                <BottomNavigationAction  
                    onClick={(value) => this.handleChange("")} 
                    icon={<HomeIcon />}
                    //changes styling based on if it is selected or not
                    style={selected === "" ? selectedStyle : null}
                />
                <BottomNavigationAction  
                    onClick={(value) => this.handleChange("explore")}
                    icon={<ExploreIcon />}
                    style={selected === "explore" ? selectedStyle : null} 
                />
                <BottomNavigationAction  
                    onClick={(value) => this.handleChange("news")} 
                    icon={<PublicIcon />}
                    style={selected === "news" ? selectedStyle : null} 
                />
                <BottomNavigationAction  
                    onClick={(value) => this.handleChange("settings")}
                    icon={<SettingsIcon />}
                    style={selected === "settings" ? selectedStyle : null} 
                />
            </BottomNavigation>
        )
    }
}

export default Navbar;
