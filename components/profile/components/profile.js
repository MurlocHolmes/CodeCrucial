import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles.scss';
import SkillButtons from './skillbuttons';
import SkillDescription from './skilldescription';
import { Skills } from './_skilldata';
import { setSkill, setOldSkill, setDescriptionVisibility } from './redux/actions';

export class Profile extends Component {

	constructor(props) {
		super(props);
		const initialSkill = {
			title: "Click a button on the left",
			rating: "3",
			description: "Click a button on the left for a description of the corresponding skill"
		};
		this.props.setSkill(initialSkill);
		this.props.setOldSkill(initialSkill);
		this.props.setDescriptionVisibility(false);
		this.populateSkillDescription = this.populateSkillDescription.bind(this);
		this.getLevel = this.getLevel.bind(this);
		this.animateDescription = this.animateDescription.bind(this);
		this.getSkillStyle = this.getSkillStyle.bind(this);
	}

	populateSkillDescription(name) {
		this.props.setDescriptionVisibility(!this.props.isDescriptionVisible);
		const skill = Skills[name];
		skill.title = name;
		this.props.setSkill(skill);
	}

	getLevel(rating) {
		switch(rating) {
			case 1:
				return 'Beginner';
			case 2:
				return 'Proficient';
			case 3:
				return 'Expert';
		}
	}

	animateDescription() {
		setTimeout(() => {
			if(this.props.isDescriptionVisible) {
				this.props.setDescriptionVisibility(!this.props.isDescriptionVisible)
			}
		}, 100);
	}

	getSkillStyle(stage) {
		let skillStyle = "description-text " + stage + "-description ";
		if(!this.props.isDescriptionVisible) {
			skillStyle += "text-animation";
		}
		return skillStyle;
	}

	render() {
		const { skill, oldSkill } = this.props;
		if(skill === undefined) {
			return (
				<div className="section-container portfolio-container container-fluid">
					Please wait...
				</div>
			);
		}
		else {
		  	return (
			    <div className="section-container profile-container container-fluid">
					<h4 className="section-header">
						This is a list of some of the things I'm good at.
					</h4>
			  		<div className="container skill-wrapper">
				    	<SkillButtons 
				    		skills={Skills} 
				    		active={skill.title} 
				    		populateSkillDescription={this.populateSkillDescription}/>
				    	<SkillDescription 
				    		animateDescription={this.animateDescription}
				    		getSkillStyle={this.getSkillStyle}
				    		{...this.props} />
					</div>
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		skill: state.profile_info.skill,
		oldSkill: state.profile_info.oldSkill,
		isDescriptionVisible: state.profile_info.isDescriptionVisible
	}
}

const mapDispatchToProps = dispatch => {
  return {
    setSkill: skill => {
		dispatch(setSkill(skill))
    },
    setOldSkill: skill => {
    	dispatch(setOldSkill(skill))
    },
    setDescriptionVisibility: isDescriptionVisible => {
    	dispatch(setDescriptionVisibility(isDescriptionVisible))
    }

  }
}

const ConnectedProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export default ConnectedProfile;

