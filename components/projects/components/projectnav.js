import React, { Component } from 'react';
import ProjectNavButton from './projectnavbutton';
export const ProjectNav = (props) => {
    const { position, minPosition, maxPosition } = props;
    return (
        <div className="project-nav col-lg-8 col-md-8 col-sm-10 col-xs-12">
            <ProjectNavButton 
                {...props} 
                visible={(position === minPosition ? 0 : 1)} 
                increment={-1} 
                direction={"back"} />
            <ProjectNavButton 
                {...props} 
                visible={(position === maxPosition ? 0 : 1)}
                increment={1} 
                direction={"next"} />
        </div>
    )
}

export default ProjectNav;