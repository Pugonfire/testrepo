import React, { Component } from "react";

class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
    // Implement the rest of this function here!
    this.props.addList(this.state.text);
    this.setState({ text: "" });
  }

  render() {
    return (
      <div id="addListDiv">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div id="addList">
            <label>
              What will be on your next list?&nbsp;
              <input
                type="text"
                ref="id"
                id="newID"
                onChange={this.handleChange.bind(this)}
                value={this.state.text}
              ></input>
            </label>
          </div>
          <br />
          <input type="submit" value="Create List" />
        </form>
      </div>
    );
  }
}

export default AddList;
