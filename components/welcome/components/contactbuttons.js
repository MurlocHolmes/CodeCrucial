import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Resume from '../../../resume.pdf'

export const ContactButtons = (props) => {
	const { activateContacts, contactsActivated } = props;
	console.log(contactsActivated);
	if(contactsActivated === 0) {
		setTimeout(activateContacts, 1000);
		setTimeout(activateContacts, 2000);
		setTimeout(activateContacts, 3000);
		setTimeout(activateContacts, 4000);
	}
	  return (
	    <div className="contact-wrapper col-lg-8 col-md-8 col-sm-10 col-xs-10">
			<div className={"contact-link resume-contact " + (contactsActivated > 0 ? "" : "inactive") + " " + (contactsActivated === 1 ? "last-activated" : "")}>
				<a href={Resume} target="_blank"><i className="fa fa-5x fa-file" aria-hidden="true"></i>Resume</a>
			</div>
			<div className={"contact-link github-contact " + (contactsActivated > 1 ? "" : "inactive") + " " + (contactsActivated === 2 ? "last-activated" : "")}>
				<a href="https://github.com/murlocholmes"><i className="fa fa-5x fa-github" aria-hidden="true"></i>Github</a>
			</div>
			<div className={"contact-link linkedin-contact " + (contactsActivated > 2 ? "" : "inactive") + " " + (contactsActivated === 3 ? "last-activated" : "")}>	
				<a href="https://www.linkedin.com/in/taylor-dobson-18395a96/"><i className="fa fa-5x fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
			</div>
			<div className={"contact-link email-contact " + (contactsActivated > 3 ? "" : "inactive")}>
				<a href="mailto:jtaylordobson@gmail.com"><i className="fa fa-5x fa-envelope" aria-hidden="true"></i>E-mail</a>
			</div>
		</div>
	  )
}

ContactButtons.propTypes = {
  activateContacts: PropTypes.func.isRequired,
  contactsActivated: PropTypes.bool.isRequired
};

export default ContactButtons;