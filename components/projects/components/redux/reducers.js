import { combineReducers } from 'redux'
import {
  INCREMENT_POSITION,
  INITIALIZE_POSITION,
  SET_PROJECTS
} from './actions'

function projects_info(state = [], action) {
  switch (action.type) {
    case INCREMENT_POSITION:
      return {
        ...state,
        position: state.position + action.offset
      };
    case INITIALIZE_POSITION:
      return {
        ...state,
        position: 0,
        minPosition: 0,
        maxPosition: action.maximum
      };
    case SET_PROJECTS:
      return {
        ...state,
        projects: action.projects
      }
    default:
      return state
  }
}

export default projects_info;


