import React, { Component } from 'react';
import Comments from './comments';

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = { comments: [] }

  }

  addNew(newComment) {
    let arr = this.state.comments;
    arr.push(newComment);
    this.setState({ comments: arr });
  }

  removeComment(i) {
    let arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({ comments: arr })
  }

  updateComment(userText, i) {
    let arr = this.state.comments;
    arr[i] = userText;
    this.setState({ comments: arr });
  }

  eachComment(message, i) {
    return (
      <Comments key={i} index={i}
      removeCommentText={this.removeComment.bind(this)}
      updateCommentText={this.updateComment.bind(this)}
      >
        {message}
      </Comments>
    )
  }

  render() {
    return (
      <div>
        <button
          onClick= {this.addNew.bind(this,'enter comment')}
          className="btn btn-info">
          ADD NEW</button><br />
        {
          this.state.comments.map(this.eachComment.bind(this))
        }
      </div>
    )
  }
}
