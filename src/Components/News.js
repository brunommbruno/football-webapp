import { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { NewsObjs } from "./NewsObjs";
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
                {NewsObjs.map((article) => (
                        <Card className="card">
                        <Card.Img variant="top" src={article.urlToImage} />
                        <Card.Body>
                            <Card.Title>{article.title}</Card.Title>
                            <Card.Text>
                                {article.description}
                            </Card.Text>
                            <Button variant="primary">See More</Button>
                        </Card.Body>
                        </Card>
                ))}
                </div>

            </div>
        )
    }

}

export default News;
