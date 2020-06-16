import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  MuiAppBarColorPrimary: {
    backgroundColor: 'pink',
  },
  menuButton: {
    color: 'white',
  },
  title: {
    flexGrow: 1,
  },
}));

const Nav = ({ className }) => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Travelnology <FlightTakeoffIcon />
        </Typography>
        <NavLink exact to="/" title="Home">
          <IconButton className={classes.menuButton}>
            <HomeIcon />
          </IconButton>
        </NavLink>
        <NavLink to="/backend" title="Admin">
          <IconButton className={classes.menuButton}>
            <AssignmentIndIcon />
          </IconButton>
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};
Nav.propTypes = {
  className: PropTypes.string,
};

export default Nav;
