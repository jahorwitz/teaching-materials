import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNewNote } from '../actions/BoardActions'
import Board from '../components/Board'
import NoteContainer from './NoteContainer'

const BoardContainer = ({ notes, addNewNote }) => (
    <Board
        notes={notes}
        onAddNoteClicked={() => {
            addNewNote();
        }}
    >
        {notes.map((note, index) => (
            <NoteContainer key={index} id={note.id} title={note.title} body={note.body}/>
        ))}
    </Board>
)

BoardContainer.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    })).isRequired,
    addNewNote: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    notes: state.boardReducer.notes
});

export default connect(
    mapStateToProps,
    { addNewNote }
)(BoardContainer)