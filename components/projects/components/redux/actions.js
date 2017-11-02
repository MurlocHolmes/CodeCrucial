/*
 * action types
 */

export const INCREMENT_POSITION = 'INCREMENT_POSITION';
export const INITIALIZE_POSITION = 'INITIALIZE_POSITION';
export const SET_PROJECTS = 'SET_PROJECTS';


/*
 * action creators
 */

export function initializePosition(maximum) {
	return { type: INITIALIZE_POSITION, maximum }
}

export function incrementPosition(offset) {
	return { type: INCREMENT_POSITION, offset }
}

export function setProjects(projects) {
	return { type: SET_PROJECTS, projects }
}