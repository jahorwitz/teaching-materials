import React from 'react';
import '../css/Board.css';

class Board extends React.Component {

    render() {
        return (
            <div>
                <div className="div-board">
                    <div className="row">
                        {this.props.children}
                    </div>
                </div>
                <div>
                    <button className="btn btn-success add-button" onClick={this.props.onAddNoteClicked}>Add</button>
                </div>
            </div>
        );
    }
}

export default Board;