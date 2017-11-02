import React, { Component } from 'react';
import ProjectModal from './projectmodal';
export const ProjectCard = (props) => {
    const { project, cardStyle, index } = props;
    return (
        <div style={cardStyle} className="project-wrapper col-lg-4 col-md-4 col-md-4 col-sm-4 col-xs-4">
            <div className="project-details">
              <h4 className="project-title">{project.title}</h4>
              <p className="project-text project-blurb">{project.blurb}</p>
            </div>
            <ProjectModal index={index} project={project} />
        </div>
    )
}

export default ProjectCard;




