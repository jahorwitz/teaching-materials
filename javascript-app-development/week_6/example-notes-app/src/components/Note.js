import React from 'react';
import '../css/Note.css';

class Note extends React.Component {

    constructor(props) {
        super();
        this.state = {
            title: props.title,
            editTitle: "",
            body: props.body,
            editBody: "",
            editMode: false
        }
    }
    
    toggleEditMode = () => {
        let editMode = this.state.editMode;
        this.setState({
            editMode: !editMode
        });
    }

    handleTitleChange = (event) => {
        this.setState({editTitle: event.target.value});
    }

    handleBodyChange = (event) => {
        this.setState({editBody: event.target.value});
    }

    saveNote = () => {
        this.setState({
            title: this.state.editTitle,
            body: this.state.editBody
        });
    }

    handleDelete = (event) => {
        event.preventDefault();
        this.props.handleDelete(this.props.noteId);
    }

    render() {
        return (
            <div className="col-sm-6">
                <div className="card card-view">
                    <div className="card-body">
                        {this.state.editMode && (
                            <div>
                                <h5 className="card-title">Title:</h5>
                                <input type="text" name="title" placeholder="New Title" value={this.state.editTitle} onChange={(this.handleTitleChange)} />
                                <h5 className="card-title">Body:</h5>
                                <input type="text" name="body" placeholder="New Body" value={this.state.editBody} onChange={this.handleBodyChange} />
                                <button className="btn btn-info" onClick={() => {
                                    this.saveNote();
                                    this.toggleEditMode();
                                }}>Save</button>
                                <button className="btn btn-danger">Cancel</button>
                            </div>
                        )}
                        {!this.state.editMode && (
                            <div>
                                <h5 className="card-title">{this.state.title}</h5>
                                <p>{this.state.body}</p>
                                <button className="btn btn-info" onClick={this.toggleEditMode}>Edit</button>
                                <button className="btn btn-danger" onClick={this.handleDelete}>Delete</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Note;