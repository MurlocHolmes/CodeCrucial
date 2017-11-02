import React, { Component } from 'react';

export const SkillDescription = (props) => {
	const { skill, oldSkill, animateDescription, getSkillStyle } = props;
	animateDescription();
	return ( 
	    <div id="skill-description" className="skill-description skill-container col-lg-6 col-lg-6 col-md-6 col-sm-8 col-xs-8">
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