import React, {Component} from 'react';
import '../css/Note.css';

class Note extends Component {
  constructor() {
    super();
    this.state = {
      title: "Sample Title",
      body: "Sample body text",
      editTitle: "",
      editBody: "",
      editMode: false
    }
  }

  enterEditMode() {
    this.setState({
      editMode: true
    });
  }

  exitEditMode() {
    this.setState({
      editMode: false
    });
  }

  handleTitleChange(event) {
    this.setState({editTitle: event.target.value});
  }

  handleBodyChange(event) {
    this.setState({editBody: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      title: this.state.editTitle,
      body: this.state.editBody,
      editMode: false
    });
  }

  render() {
    return (
      <div className="col-sm-6">
        <div className="card card-view">
          <div className="card-body">
            {this.state.editMode ? (
              <form onSubmit={this.handleSubmit.bind(this)}>
                <h5 className="card-title">
                  Title
                  <input type="text" name="title" placeholder="New Title" value={this.state.editTitle} onChange={this.handleTitleChange.bind(this)}/>
                </h5>
                <p>
                  Body
                  <input type="text" name="body" placeholder="New Body" value={this.state.editBody} onChange={this.handleBodyChange.bind(this)}/>
                </p>
                <button type="submit" className="btn btn-info">Save</button>
                <button onClick={this.exitEditMode.bind(this)} className="btn btn-danger">Cancel</button>
              </form>
            ) : (
              <div>
                <h5 className="card-title">{this.state.title}</h5>
                <p>{this.state.body}</p>
                <button onClick={this.enterEditMode.bind(this)} className="btn btn-info">Edit</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

Note.defaultProps = {
    title: "A cool title",
    body: "A cool body",
};

export default Note;