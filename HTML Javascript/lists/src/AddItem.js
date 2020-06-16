import React, { Component } from "react";

class AddItem extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      newItem: {},
    };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault(); // this prevents the page from reloading -- do not delete this line!
    // Implement the rest of this function here!
    this.props.addItem(this.props.idName, this.state.text);
    this.setState({ text: "" });
  }

  render() {
    var divName = "add" + this.props.idName;
    return (
      <div className="addItemDiv">
        <h4>Add {this.props.idName}</h4>
        <form ref="form" onSubmit={this.handleSubmit.bind(this)}>
          <div id={divName} ref={divName}>
            <label>Name</label>
            <br />
            <input
              type="text"
              ref="id"
              onChange={this.handleChange.bind(this)}
              value={this.state.text}
            />
          </div>
          <br />
          <input type="submit" value="Submit" />
          <br />
        </form>
      </div>
    );
  }
}

export default AddItem;