/*
 * action types
 */

export const ADD_USER_NAME = 'ADD_USER_NAME';

/*
 * action creators
 */

export function addUserName(name) {
  return { type: ADD_USER_NAME, name }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}