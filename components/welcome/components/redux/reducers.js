import { combineReducers } from 'redux'
import {
  ACTIVATE_CONTACTS
} from './actions'

function welcome_info(state = {contactsActivated: 0}, action) {
  switch (action.type) {
    case ACTIVATE_CONTACTS:
      return {
        ...state,
        contactsActivated: state.contactsActivated + 1
      };
    default:
      return state;
  }
}

export default welcome_info;


