/*
 * action types
 */

export const SET_SKILL = 'SET_SKILL';
export const SET_OLD_SKILL = 'SET_OLD_SKILL';
export const SET_DESCRIPTION_VISIBILITY = 'SET_DESCRIPTION_VISIBILITY';


/*
 * action creators
 */

export function setSkill(skill) {
	return { type: SET_SKILL, skill}
}

export function setOldSkill(skill) {
	return { type: SET_OLD_SKILL, skill }
}

export function setDescriptionVisibility(isDescriptionVisible) {
	return { type: SET_DESCRIPTION_VISIBILITY, isDescriptionVisible }
}