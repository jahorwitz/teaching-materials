import { combineReducers } from 'redux'
import { BoardActionTypes } from '../actions/BoardAction'

function notesReducer(currentNotes = [], action) {
  switch (action.type){
    case BoardActionTypes.ADD_NEW_NOTE:
        let newNote = {
            id: Date.now(),
            title: "New Note",
            body: "Sample note body text"
        };
        return [...currentNotes, newNote];
    case BoardActionTypes.UPDATE_NOTE:
        return currentNotes.map((note) => {
          if (note.id === action.id) {
            return {
              ...note,
              title: action.title,
              body: action.body
            };
          } else {
            return note;
          }
        });
    case BoardActionTypes.DELETE_NOTE:
      return currentNotes.filter((note) => note.id !== action.id);
    case BoardActionTypes.INITIALIZE_NOTES:
        return [
          {
            id: 1,
            title: "Sample Title",
            body: "Sample body text"
          }
        ];
    default:
      return currentNotes;
  }
}

export default combineReducers({
  notes: notesReducer
});