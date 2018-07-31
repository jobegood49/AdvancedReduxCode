import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/index";

class CommentBox extends Component {
  state = {
    comment: "HELLO"
  };

  handleChange = e => {
    this.setState({ comment: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    // console.log(props)

    // Call an action creator
    // And save the comment
    console.log(this.state.comment)
    let updatedComment = this.props.saveComment(this.state.comment);
    
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  actions
)(CommentBox);
