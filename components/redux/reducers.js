import { combineReducers } from 'redux'
import {
  ADD_USER_NAME
} from './actions'
import { projects_info } from '../projects';
import { profile_info } from '../profile';
import { welcome_info } from '../welcome';

function user_info(state = [], action) {
  switch (action.type) {
    case ADD_USER_NAME:
      return {
        ...state,
        userName: action.name
      };
    default:
      return state
  }
}

const AppStore = combineReducers({
  user_info,
  projects_info,
  profile_info,
  welcome_info
});

export default AppStore;