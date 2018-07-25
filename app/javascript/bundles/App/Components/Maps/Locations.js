import React, { Component } from 'react'
import axios from 'axios';
import MapBox from './MapBox';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Fa, SideNavItem, SideNavCat, SideNavNav, SideNav, SideNavLink } from 'mdbreact';
import { Container } from '../../../../../../node_modules/semantic-ui-react';

const styles = {
  list: {
    width: 275,
  },
	bottomList: {
		height: 200,
		width: 300,
	}
};

class Locations extends Component {
	state = {
	 left: false,
	 bottom: false
 };

 toggleDrawer = (side, open) => () => {
	this.setState({
		[side]: open,
	});
};


	render() {

		const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
				<Button className="SideNavHeader" fullWidth='true' onClick={this.toggleDrawer('left', true)}></Button>
        <Divider />
				<List></List>
				<Button className="SideNavOptions" color='primary' fullWidth='true' onClick={this.toggleDrawer('left', true)}>Home</Button>
        <Divider />
				<Button className="SideNavOptions" fullWidth='true' onClick={this.toggleDrawer('left', true)}>Work</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth='true' onClick={this.toggleDrawer('left', true)}>Favorites</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth='true' onClick={this.toggleDrawer('left', true)}>Connect Calender</Button>
        <List></List>
				<Divider />
				<Button className="SideNavOptions" fullWidth='true' onClick={this.toggleDrawer('left', true)}>Connect Facebook Events</Button>
        <List></List>
				<Divider />
      </div>
    );

		const bottomList = (
		<div className="reportDrawer)">
			<div className={classes.bottomList}>
			<Container></Container>
				<List></List>
				<Button fullWidth='false' onClick={this.toggleDrawer('bottom', true)}>Theft</Button>
				<Divider />
				<List></List>
				<Button fullWidth='false' onClick={this.toggleDrawer('bottom', true)}>Break In</Button>
			</div>
		</div>
		);


    return (
      <div>
    		<Button onClick={this.toggleDrawer('left', true)}><Fa icon="bars" size="2x"></Fa></Button>
				<Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
				<div className="bottomModule">
				<Drawer anchor='right' open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {bottomList}
          </div>
        </Drawer>
				</div>
				<MapBox />
			 <Button id='addReport' variant="fab" color="primary" aria-label="Add" onClick={this.toggleDrawer('bottom', true)}><AddIcon /></Button>
      </div>
    );
	}
}

Locations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Locations);
