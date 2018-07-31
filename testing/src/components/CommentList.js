import React, { Component } from "react";
import {connect} from "react-redux";

class CommentList extends Component {
  renderComments() {
    console.log("this is the props", this.props);
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
    console.log("the mapsToProps is invoked")
    return { comments: state.comments}
}


export default connect(mapStateToProps)(CommentList)