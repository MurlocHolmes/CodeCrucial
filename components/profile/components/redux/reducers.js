import { combineReducers } from 'redux'
import {
  SET_SKILL,
  SET_OLD_SKILL,
  SET_DESCRIPTION_VISIBILITY
} from './actions'

function profile_info(state = [], action) {
  switch (action.type) {
    case SET_SKILL:
      return {
        ...state,
        oldSkill: state.skill,
        skill: action.skill
      };
    case SET_OLD_SKILL:
      return {
        ...state,
        oldSkill: action.skill
      };
    case SET_DESCRIPTION_VISIBILITY:
      return {
        ...state,
        isDescriptionVisible: action.isDescriptionVisible
      }
    default:
      return state
  }
}

export default profile_info;


