import React, { Component } from 'react';

export const SkillDescription = (props) => {
	const { skill, oldSkill, animateDescription, getSkillStyle } = props;
	animateDescription();
	return ( 
	    <div id="skill-description" className="skill-description skill-container col-md-6 col-sm-12">
	    	<div className={getSkillStyle("old")}>
		    	<h1>{oldSkill.title}</h1>
		    	<h5>{oldSkill.level}</h5>
		    	<p>{oldSkill.description}</p>
		    	<p>Experience: {oldSkill.experience}</p>
	    	</div>	
	    	<div className={getSkillStyle("new")}>
		    	<h1>{skill.title}</h1>
		    	<h5>{skill.level}</h5>
		    	<p>{skill.description}</p>
		    	<p>Experience: {skill.experience}</p>
		    </div>
		</div>
	)
}
export default SkillDescription;