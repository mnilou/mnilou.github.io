import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: 'DarkSlateGray',
  },
  timeLine: {
    position: 'relative',
    padding: '1rem',
    margin: 'o auto',
    '&:before': {
      content: "''",
      position: 'absolute',
      height: '100%',
      border: '1px solid tan',
      right: '40px',
      top: 0,
    },
    '&:after': {
      content: "''",
      display: 'table',
      clear: 'both',
    },
    [theme.breakpoints.up('md')]: {
      padding: '2rem',
      '&:before': {
        left: 'calc(50% - 1px)',
        right: 'auto',
      },
    },
  },
  timeLineItem: {
    padding: '1rem',
    borderBottom: '2px solid tan',
    position: 'relative',
    margin: '1rem 3rem 1rem 1rem',
    clear: 'both',
    '&:after': {
      content: "''",
      position: 'absolute',
    },
    '&:before': {
      content: "''",
      position: 'absolute',
      right: '-0.625rem',
      top: 'calc(50% - 5px)',
      borderStyle: 'solid',
      borderColor: 'Aquamarine Aquamarine transparent transparent',
      borderWidth: '0.625rem',
      transform: 'rotate(45deg)',
    },
    [theme.breakpoints.up('md')]: {
      width: '44%',
      margin: '1rem',
      '&:nth-of-type(2n)': {
        float: 'right',
        margin: '1rem',
        borderColor: 'tan',
      },
      '&:nth-of-type(2n):before': {
        right: 'auto',
        left: '-0.625rem',
        borderColor: 'transparent transparent Aquamarine Aquamarine',
      },
    },
  },
  timeLineYear: {
    textAlign: 'center',
    maxWidth: '9.375rem',
    margin: '0 3rem 0 auto',
    fontSize: '1.8rem',
    color: '#fff',
    background: 'DodgerBlue',
    lineHeight: 1,
    padding: '0.5rem 1rem',
    '&:before': {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      textAlign: 'center',
      margin: '0 auto',
      '&:nth-of-type(2n)': {
        float: 'none',
        margin: '0 auto',
      },
      '&:nth-of-type(2n):before': {
        display: 'none',
      },
    },
  },
  heading: {
    color: 'Aquamarine',
    padding: '3rem 0',
    textTransform: 'uppercase',
  },
  subHeading: {
    color: '#fff',
    padding: 0,
    textTransform: 'uppercase',
  },
  body1: {
    color: 'Aquamarine',
  },
  subtitle1: {
    color: 'tan',
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        CURRENT RESUME
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Technical Skills
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            *************************************
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Node.Js, Express, JavaScript, jQuery, React.js, React Native, GIT,
            GitHub, MongoDB, MySQL, Firebase, HTML, CSS, Bootstrap, Media
            Queries, APIs, JSON, REST, AJAX, Squarespace, WordPress, Microsoft
            Office Suite, Adobe Acrobat, PhotoShop, QuickBooks, Constant
            Contact, L-Soft, Asana, CVent, MemberClicks, constituent Management
            Database operations, MailChimp.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2008
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Experience
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            **************************
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            🔹Full-service management of 400+ attendee conferences with tasks
            including marketing, registration, finances, exhibitor relations,
            faculty coordination, hotel & venue arrangements, on-site
            management, etc. for multi-day virtual and onsite meetings.
            <br />
            🔹Build full stack websites for clients ranging from conferences,
            authors, and associations.
            <br />
            🔹Overall leadership of staff, ranging from 2 - 6 associates, in the
            development & implementation of short & long range policies &
            activities. <br />
            🔹Financial management of client accounts, including the development
            & implementation of the annual budget, maintaining tax & government
            requirements, and book keeping of $1.2 million yearly budget.
            <br />
            🔹Maintain yearly renewals of 600+ membership association with
            management of board meetings, journal subscriptions & member
            benefits and membership donation campaigns.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2007
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Education
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            ************************
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            🔹University Of California, San Diego Certificate – Full Stack Web
            Development <br />
            🔹M.A. The University Of Chicago International Relations. Graduate
            thesis: “Who Are We: The Perplexity of Iranian-American Identity,”
            Published in The Sociological Quarterly, Volume 44, Number 4, pages
            681-703 <br />
            🔹B.A. University Of California, San Diego cum laude, Honors History
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
