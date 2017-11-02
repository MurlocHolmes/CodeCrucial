import React, { Component } from 'react';
import ProjectCard from './projectcard';
export const Carousel = (props) => {
    const { projects, getCardStyle } = props;
    return (
        <div className="project-group col-lg-8 col-md-8 col-sm-10 col-xs-12">
            {projects.map((project, index) => 
                <ProjectCard project={project} index={index} cardStyle={getCardStyle(index)} />
            )}
        </div>
    )
}

export default Carousel;
