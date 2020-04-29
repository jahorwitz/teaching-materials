import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Note from '../components/Note'
import { updateNote, deleteNote } from '../actions/BoardAction'

const NoteContainer = ({ id, title, body, updateNote, deleteNote }) => (
  <Note
    id={id}
    title={title}
    body={body}
    onSaveClicked={(newTitle, newBody) => {
      updateNote(id, newTitle, newBody);
    }}
    onDeleteClicked={() => {
      deleteNote(id);
    }}
  />
)

NoteContainer.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
}

export default connect(null, {
  updateNote,
  deleteNote
})(NoteContainer)
