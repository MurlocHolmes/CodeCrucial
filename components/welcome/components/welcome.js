import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactButtons from './contactbuttons';
import '../styles.scss';
import { activateContacts } from './redux/actions';

const bucketList = [
	{item: "Get married", status: "accomplished"},
	{item: "Have Children", status: "accomplished"},
	{item: "Buy a house", status: "accomplished"},
	{item: "Travel to Australia", status: "pending"},
	{item: "Ride an airplane", status: "pending"},
	{item: "Take the chunnel", status: "pending"},
	{item: "Celebrate New Year's in another timezone", status: "pending"},
	{item: "Go on a cruise", status: "pending"},
	{item: "Ship a AAA game", status: "pending"},
	{item: "Attend PAX West", status: "pending"},
	{item: "Give a talk at a major software conference", status: "pending"},
];

export class Welcome extends Component {

	render() {
		return (
		    <div className="welcome-container section-container container-fluid">
				<p>
					Hi there, friend. My name's Taylor Dobson and I'm a software developer. I've worked for a few companies, big and small, and always find myself discovering something new to love about the game. This website's just for me to list out some of what I do or have done as well as some of what I hope to accomplish one day. </p>
				<ContactButtons activateContacts={this.props.activateContacts} contactsActivated={this.props.contactsActivated || 0} />
			</div>
		  )
	}
}

const mapStateToProps = state => {
	return {
		contactsActivated: state.welcome_info.contactsActivated
	}
}

const mapDispatchToProps = dispatch => {
  return {
    activateContacts: () => {
      dispatch(activateContacts())
    }

  }
}

const ConnectedWelcome = connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome)

export default ConnectedWelcome;