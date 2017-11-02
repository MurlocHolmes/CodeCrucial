import React, { Component } from 'react';
import Navigation from './navigation';

export const Header = ({pages, userName}) => (
  	<div className="site-header">
      <Navigation pages={pages} />
    </div>
)

export default Header;


