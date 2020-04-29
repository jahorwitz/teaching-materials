import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { updateNote, deleteNote } from '../actions/BoardActions'
import Note from '../components/Note'

const NoteContainer = ({ id, title, body, updateNote, deleteNote }) => (
    <Note
        id={id}
        title={title}
        body={body}
        onDeleteNote={() => {
            deleteNote(id);
        }}
        onSaveNote={(newTitle, newBody) => {
            updateNote(id, newTitle, newBody);
        }}
    />
)

NoteContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    updateNote: PropTypes.func.isRequired,
    deleteNote: PropTypes.func.isRequired
}

export default connect(null,
    { updateNote, deleteNote }
)(NoteContainer)