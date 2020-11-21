import React from 'react';
// import SocialBadge from 'react-social-badge'
import {makeStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHub from '@material-ui/icons/GitHub';
import Instagram from '@material-ui/icons/Instagram';
import {LinkedIn} from '@material-ui/icons';

const useStyles = makeStyles({
  bottomNavContainer: {
    background: '#222',
  },
  root: {
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'Aquamarine',
        fontSize: '1.8rem',
      },
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation className={classes.bottomNavContainer}>
      <BottomNavigationAction
        fab
        icon={<LinkedIn />}
        href="https://www.linkedin.com/in/nilou-mostofi"
        className={classes.root}
      />
      <BottomNavigationAction
        icon={<GitHub />}
        href="https://github.com/mnilou"
        className={classes.root}
      />
      <BottomNavigationAction icon={<Instagram />} href="https://www.instagram.com/kmdirect/" className={classes.root} />
    </BottomNavigation>
  );
};
export default Footer;
