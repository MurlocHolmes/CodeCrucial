import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from './carousel';
import ProjectNav from './projectnav';
import '../styles.scss';
import { initial_projects } from "./_projectdata";
import { incrementPosition, initializePosition, setProjects } from './redux/actions';

export class Projects extends Component {

	constructor(props) {
	  	super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.getCardStyle = this.getCardStyle.bind(this);
        this.checkAndIncrementPosition = this.checkAndIncrementPosition.bind(this);
        this.props.initializePosition(initial_projects.length - this.getVisibleCardCount());
        this.props.setProjects(initial_projects);
	}

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    getVisibleCardCount() {
		let count = 1;
		const width = this.state['width'];
		if(width > 768) {
            count = 3;
		} else if(width > 640) {
            count = 2;
		} else {
            count = 1;
		}
		return count;
	}

	getCardStyle(index) {
		let count = this.getVisibleCardCount();
		const { position } = this.props;
	    const offset = index-position;
	    const visible = (-1 < offset && offset <= initial_projects.length - count+1 ? 1 : 0);
	    const cardStyle = {
	        marginLeft:offset*(100/count)+"%",
	        opacity:visible
	    };
	    return cardStyle;
	}

	checkAndIncrementPosition(increment) {
		const { minPosition, maxPosition, position } = this.props;
		if(position+increment <= maxPosition && position+increment >= minPosition) {
			this.props.incrementPosition(increment);
		}
	}

	render() {
		const { projects, position } = this.props;
		if(projects === undefined) {
			return (
				<div className="section-container projects-container container-fluid">
					Please wait...
				</div>
			);
		}
		else {
			return (
				<div className="section-container projects-container container-fluid">
					<h4 className="section-header">
						These are some projects I've worked on.
					</h4>
					<Carousel 
						{...this.props}
						getCardStyle={this.getCardStyle} 
						checkAndIncrementPosition={this.checkAndIncrementPosition} />

		            <ProjectNav 
		            	{...this.props} 
		            	checkAndIncrementPosition={this.checkAndIncrementPosition} />
				</div>
			);
		}
	}
}

const mapStateToProps = state => {
	return {
		projects: state.projects_info.projects,
		position: state.projects_info.position,
		maxPosition: state.projects_info.maxPosition,
		minPosition: state.projects_info.minPosition
	}
}

const mapDispatchToProps = dispatch => {
  return {
    incrementPosition: offset => {
      dispatch(incrementPosition(offset))
    },
    initializePosition: max => {
    	dispatch(initializePosition(max))
    },
    setProjects: projects => {
    	dispatch(setProjects(projects))
    },

  }
}

const ConnectedProjects = connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)

export default ConnectedProjects;