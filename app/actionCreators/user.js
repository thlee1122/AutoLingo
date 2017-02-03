'use strict';

export const SET_USER = 'SET_USER';
export const ADD_USER = 'ADD_USER';

export const setUser = (selectedUser) => {
  return { type: SET_USER, selectedUser }
}

export const addUser = (user) => {
	return { type: ADD_USER, user }
}