import { combineReducers } from 'redux';

import { BoardActionTypes } from '../actions/BoardActions'

function notesReducer(currentNotes = [], action) {
    switch (action.type){
      case BoardActionTypes.ADD_NEW_NOTE:
        return [...currentNotes, {
            id: Date.now(),
            title: "Some Title",
            body: "Sample body text"
        }];
      case BoardActionTypes.DELETE_NOTE:
        return currentNotes.filter(note => {
            return note.id !== action.id;
        });
      case BoardActionTypes.UPDATE_NOTE:
        return currentNotes.map(note => {
          if (note.id === action.id) {
            return {
              ...note,
              title: action.title,
              body: action.body
            }
          } else {
            return note;
          }
        });
      default:
        return currentNotes;
    }
  }

  export default combineReducers({
      notes: notesReducer
  });
  