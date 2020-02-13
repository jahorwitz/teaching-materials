import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
    this.state = {
        notes: [{
            id: "12345",
            title: "Class Notes",
            body: "Always use constructors when extending another class"
        }]
    };
  }

  addNote = () => {
    const notes = this.state.notes;
    notes.push({
        id: Date.now(),
        title: "Class Notes",
        body: "Always use constructors when extending another class"
    });
    this.setState({
        notes
    });
  }

  deleteNote(id) {
    let notes = this.state.notes.filter((note) => {
      return note.id !== id;
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
                  return <Note key={index} id={note.id} title={note.title} body={note.body} deleteHander={this.deleteNote.bind(this)}/>;
              })}
          </div>
        </div>
        <div>
          <button onClick={this.addNote} className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}

export default Board;