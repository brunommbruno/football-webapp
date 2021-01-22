import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
class News extends Component{

    render(){
        return(
            <div className="news">
                <AppBar position="static" className="appbar">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                    News
                    </Typography>
                </Toolbar>
                </AppBar>

                <div className="articles">
                <Card className="card">
                <Card.Img variant="top" src="https://static.reuters.com/resources/r/?m=02&d=20201229&t=2&i=1546046817&r=LYNXMPEGBS0JX&w=800" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>

                                <Card className="card">
                <Card.Img variant="top" src="https://static.reuters.com/resources/r/?m=02&d=20201229&t=2&i=1546046817&r=LYNXMPEGBS0JX&w=800" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                </Card>
                </div>
            </div>
        )
    }

}

export default News;
