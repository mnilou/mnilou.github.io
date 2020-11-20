import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
// import Button from "@material-ui/core/Button";
import Mailto from 'react-mailto.js';

import Send from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: 'DarkSlateGray',
    height: '100vh',
  },
  heading: {
    color: 'Aquamarine',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  form: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
  },
  input: {
    color: '#fff',
  },
  button: {
    marginTop: '1rem',
    textTransform: 'uppercase',
    color: 'Aquamarine',
    borderColor: 'tan',
  },
  field: {
    margin: '1rem 0rem',
  },
}));

const InputField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'Aquamarine',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        color: '#fff',
        borderColor: 'tan',
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.contactContainer}>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography variant="h5" className={classes.heading}>
            Hire or Contact me...
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            inputProps={{className: classes.input}}
          />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            inputProps={{className: classes.input}}
            className={classes.field}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            inputProps={{className: classes.input}}
          />
          <Mailto
            secure={true}
            className={classes.button}
            to="nilou@km-direct.com"
            subject="Some email subject"
            body={['This is the body of your message', 'Multilined also'].join(
              '\n'
            )}
          >
            Contact Me
          </Mailto>
          {/* <Mailto
            variant="outlined"
            fullWidth={true}
            href={"mailto: nilou@km-direct.com" + this.props.email}
            endIcon={<Send />}
            className={classes.button}
          >
            Contact Me
          </Mailto> */}
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
