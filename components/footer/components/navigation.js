import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const Navigation = ({ pages }) => (
	<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
	  	<ul className="nav navbar-nav">
			<li className="nav-item">
	    		<Link className="nav-link" to="/">CodeCrucial</Link>
	    	</li>
	      	{pages.map(page => (
	        	<li className="nav-item" key={page}>
	        		<Link className="nav-link" to={"/" + page.toLowerCase()}>{page}</Link>
	        	</li>
	    	))}
		</ul>
	</nav>
)

export default Navigation;