import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import project1 from '../images/starwars-screenshot.jpg';
import project2 from '../images/burger-screenshot.jpg';
import project3 from '../images/covid-screenshot.png';
import project4 from '../images/weather-screenshot.png';
import project5 from '../images/directory-screenshot.jpg';
import project6 from '../images/react.png';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: 'DarkSlateGray',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '3rem auto',
  },
}));

const projects = [
  {
    name: 'The Galactic Game',
    description: `The app provides the user with a series of multiple choice questions relating to the Star Wars universe. This app differs from all others by displaying a Star Wars GIF that correlates with every correct or incorrect answer.`,
    image: project1,
  },
  {
    name: 'Devour-a-Burger',
    description: `This app is a fun "burger logger" that uses the MVC design pattern with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). The app uses Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.`,
    image: project2,
  },
  {
    name: 'COVID-Karaoke',
    description: `In these unprecedented times people feel at a loss without the simple pleasures they once enjoyed outside of the home. Our application offers users the opportunity to gain back a sense of normalcy while maintaining their health and safety in the comfort of their own home.`,
    image: project3,
  },
  {
    name: 'Weather Dashboard',
    description: `The OpenWeather API retrieves weather data for cities and allows the app to function as a weather dashboard that runs in the browser. It features dynamically updated HTML and CSS. Third-party APIs allow developers to access their data and functionality by making requests to a URL.`,
    image: project4,
  },
  {
    name: 'Employee Directory',
    description: `This REACT app is designed to keep track of employees through a directory. This app enables employers to view their entire employee directory at once so that they have quick access to their information. The app uses REACT, axios, Bootstrap and gh-pages.`,
    image: project5,
  },
  {
    name: 'Campaign Planner',
    description: `This REACT app is designed to keep track of employees through a directory.

    As a user I want to be able to view my entire employee directory at once so that I have quick access to their information. This REACT app uses Node.js, MongoDB, Axios, and DOTENV`,
    image: project6,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
