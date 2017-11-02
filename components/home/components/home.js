import React, { Component } from 'react';
import { Welcome } from '../../welcome';
import { Profile } from '../../profile';
import { Projects } from '../../projects';

export const Home = (route) => {
  return (
    <div className="home-container container-fluid">
      <Welcome />
      <hr />
      <Profile />
      <hr />
      <Projects />
    </div>
  )
}

export default Home;