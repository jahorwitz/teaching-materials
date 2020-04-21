export const BoardActionTypes = {
    ADD_NEW_NOTE: 'ADD_NEW_NOTE',
    INITIALIZE_NOTES: 'INITIALIZE_NOTES',
    UPDATE_NOTE: 'UPDATE_NOTE',
    DELETE_NOTE: 'DELETE_NOTE'
}

const updateNoteUnsafe = (id, newTitle, newBody) => {
    return {
        type: BoardActionTypes.UPDATE_NOTE,
        id: id,
        title: newTitle,
        body: newBody
    }
}

export const updateNote = (id, newTitle, newBody) => (dispatch, getState) => {
    dispatch(updateNoteUnsafe(id, newTitle, newBody));
}

const deleteNoteUnsafe = (id) => {
    return {
        type: BoardActionTypes.DELETE_NOTE,
        id
    }
}

export const deleteNote = (id) => (dispatch, getState) => {
    dispatch(deleteNoteUnsafe(id));
}

const addNewNoteUnsafe = () => {
    return {
        type: BoardActionTypes.ADD_NEW_NOTE
    }
}

export const addNewNote = () => (dispatch, getState) => {
    dispatch(addNewNoteUnsafe());
}

export const setInitialNoteState = () => {
    return {
        type: BoardActionTypes.INITIALIZE_NOTES
    }
}