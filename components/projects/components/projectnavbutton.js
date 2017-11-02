import React, { Component } from 'react';
export const ProjectNavButton = (props) => {
    const { direction, checkAndIncrementPosition, visible, increment } = props;
    return (
            <button 
                style={{opacity: visible}} 
                className={"btn  " + direction + "-nav"} 
                onClick={() => {checkAndIncrementPosition(increment)}}>
              {direction}
            </button>
    )
}

export default ProjectNavButton;