import React, { Component } from 'react';
import Navigation from './navigation';

export const Footer = ({year, author}) => (
	<div className="footer">
	    <div className="container">
	      <div className="row">
	        <div className="col-xs-12">
	          <p className="text-xs-center">&copy; Copyright {year} - {author}.  All rights reserved.</p>
	        </div>
	      </div>
	    </div>
	  </div>
)

export default Footer;


