import React from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends React.Component {

    constructor() {
        super();
        this.state = {
            notes: [
                {
                    id: 1,
                    title: "Sample Title",
                    body: "Sample body text"
                },
                {
                    id: 2,
                    title: "This is the Title",
                    body: "this is a much longer body text that maybe will span two lines?"
                },
                {
                    id: 3,
                    title: "Some other title",
                    body: "Some other body text"
                }
            ]
        }
    }

    addNote = () => {
        let notes = this.state.notes;
        notes.push({
            id: Date.now(),
            title: "New Note",
            body: "New body text"
        });
        this.setState({
            notes
        });
    }

    deleteNote = (noteId) => {
        let notes = this.state.notes.filter(note => {
            return note.id !== noteId;
        });
        this.setState({
            notes
        });
    }

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        {this.state.notes.map((note, index) => {
                            return (
                                <Note key={index} noteId={note.id} title={note.title} body={note.body} handleDelete={this.deleteNote} />
                            );
                        })}
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button" onClick={this.addNote}>Add</button>
                </div>
            </div>
        );
    }
}

export default Board;