import React, {Component} from 'react';
import '../css/Board.css';
import Note from './Note';

class Board extends Component {
  constructor() {
    super();
    this.state = {
        notes: [{
            title: "Class Notes",
            body: "Always use constructors when extending another class"
        }]
    };
  }

  addNote() {
    const notes = this.state.notes;
    notes.push({
        title: "Class Notes",
        body: "Always use constructors when extending another class"
    });
    this.setState({
        notes
    });
  }

// TODO: enable deleting notes
//   deleteNote(note) {
//     const notes = this.state.notes;
//     //remove note from notes
//     this.setState({
//         notes
//     });
//   }

  render() {
    return (
      <div>
        <div className="div-board">
          <div className="row">
              {this.state.notes.map((note, index) => {
                  return <Note key={index} title={note.title} body={note.body}/>;
              })}
          </div>
        </div>
        <div>
          <button onClick={this.addNote.bind(this)} className="btn btn-success add-button">Add</button>
        </div>
      </div>
    );
  }
}

{/* <Note title="Class Notes" body="Always use constructors when extending another class"/>
              <Note title="Cooking Notes" body="Use fresh ingredients"/>
              <Note title="Driving Notes" body="Drive on the right side of the road"/>
              <Note title="Schedule Notes" body="Do not be late"/> */}


export default Board;