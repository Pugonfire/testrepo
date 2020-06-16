import React, { Component } from "react";
import Lists from "./Lists.js";
import AddList from "./AddList.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lists: [], // this holds the name of each list
      items: {}, // this property names of this object are the names of the lists; their values are arrays of the items in each list
      /* { items: 
{Dogs: [{name: "Snoopy"}, {name: "Lola"}, {name: "Sprinkles"}], 
Cats: [{name: "Felidae"}, {name: "Garfiled"}, {name: "Cat in the Hat"}] }, 
lists: ["Dogs", "Cats"] }
*/
    };
  }

  /**
   * This function takes the state of an AddList component as its parameter
   * and updates the state of this App component by adding a new entry to the "lists"
   * array and then adding a new property in the "items" object that has the same name
   * as the value put into the "lists" array. It should then re-render this App component.
   */
  handleAddList(s) {
    // Implement this function!
    this.setState({
      items: Object.defineProperty(this.state.items, s, {
        value: [],
        writable: true,
      }), // somehow this.state.items[s] = [] does not work
      lists: this.state.lists.concat(s),
    });
    console.log(this.state);
  }

  /**
   * This function takes the state of an AddItem component as its parameter
   * and updates the state of this App component by adding a new value to the
   * appropriate array in the "items" property of the state. Keep in mind that
   * the property names of "items" are the names of each list, which is mapped
   * to an array of the items in that list. After updating the "items" part of
   * the state, this function  should then re-render this App component.
   */
  handleAddItem(id, item) {
    // Implement this function!
    var list = this.state.items[id];
    var newItem = { name: item };
    list.push(newItem);
    this.setState({
      items: Object.defineProperty(this.state.items, id, {
        value: list,
        writable: true,
      }),
    }); //use Object.defineProperty as this.state.items[s] = [] does not work
    console.log(this.state);
  }

  /**
   * Renders the component.
   */
  render() {
    return (
      <div className="App">
        <AddList addList={this.handleAddList.bind(this)} />
        <div id="listsDiv" className="List">
          <Lists
            lists={this.state.lists}
            items={this.state.items}
            addItem={this.handleAddItem.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
