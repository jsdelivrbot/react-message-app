import React, { Component } from 'react';

export default class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = { editing: false };

    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.save = this.save.bind(this);
  }
  edit() {
    console.log('edited')
    this.setState({ editing: !this.state.editing })
  }
  delete() {
    console.log('deleted')
    this.props.removeCommentText(this.props.index)
  }
  save() {
    console.log(this.refs.textVal.value);
    this.props.updateCommentText(this.refs.textVal.value, this.props.index);
    this.setState({ editing: !this.state.editing })
  }
  renderEditing() {
    return (
      <div id="msg" className="col-md-4">
        <h2>{this.props.children}</h2>
        <button onClick={this.edit} className="btn btn-primary">EDIT</button>
        <button onClick={this.delete} className="btn btn-danger">DELETE</button>
      </div>
    )
  }
  renderNormal() {
    return (
      <div id="msg" className="col-md-4">
        <textarea ref="textVal" defaultValue=''></textarea>
        <br />
        <button className="btn btn-success" onClick={this.save}>save</button>
      </div>
    )
  }
  render() {
    if (this.state.editing) {
      return this.renderNormal()
    } else {
      return this.renderEditing()
    }
  }
}
