import React, { Component } from 'react';
import TechList from './techlist';
export const ProjectModal = (props) => {
    const { project, index } = props;
    
    return (
        <div className="project-modal-wrapper">
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#" + index + "-project-modal"}>
            Click here for more deets.
          </button>
          <div className="modal fade" id={index + "-project-modal"} tabindex="-1" role="dialog" aria-labelledby={index + "-project-label"} aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id={index + "-project-label"}>{project.title}</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>
                    {project.description}
                  </p>
                  <TechList technologies={project.technologies} />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProjectModal;




