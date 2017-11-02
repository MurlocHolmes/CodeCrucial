import React, { Component } from 'react';
export const TechList = (props) => {
    const { technologies } = props;
    const techList = Object.keys(technologies).map((key) => {
        const categoryList = technologies[key].map((tech) => (
            <li>
              <p>{tech}</p>
            </li>
        ));
        return (
            <div className={key + "-tech-wrapper"} >
                <h6>{key.toLowerCase()}</h6>
                <ul>
                    {categoryList}
                </ul>
            </div>
          );
      });
    return (
        <div className="tech-wrapper">
            <h5>TECHNOLOGIES:</h5>
            <div className="tech-list-wrapper">
                {techList}
            </div>
        </div>
    )
}

export default TechList;