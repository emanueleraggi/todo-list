import React, {Component} from "react";
import Todoinput from "./components/Todoinput";
import Todolist from "./components/Todolist";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'uuid';

class App extends Component {
  state = {
    items: [],
    id: uuid(), // this will create a unique id
    item: " ",
    editItem: false
  };

handleChange = e =>{
  this.setState({
    item: e.target.value
  });
};

handleSubmit = e =>{
  e.preventDefault();
  // grabbing the values that are present on the line edit and placing in the new item
  const newItem = {
    id: this.state.id,
    title: this.state.item
    // remember that in React the state is immutable
  }

  // console.log(newItem);

const updatedItems = [...this.state.items, newItem] // the operator ... splits the array into the items and placing the into our new array

this.setState({
  items: updatedItems,
  item: " ",
  id: uuid(),
  editItem: false
});
};

clearList = () => {
  this.setState({
    items: []
  })
}

handleDelete = (id) => {
  const filteredItems = this.state.items.filter(item => item.id !== id);
  this.setState({
    items: filteredItems
  });
};

handleEdit = (id) => {
  const filteredItems = this.state.items.filter(item => item.id !== id);
  const selectedItem = this.state.items.find(item => item.id === id);
  console.log(selectedItem);

  this.setState({
    items: filteredItems,
    item: selectedItem.title,
    // now we will do the conditional rendering and change of color of the button
    editItem: true,
    id: id
  })
}

render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo 
            input</h3>
          <Todoinput 
            item={this.state.item} 
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            // now we will do the conditional rendering and change of color of the button
            editItem={this.state.editItem}

          />
          <Todolist 
          items={this.state.items}
          clearList={this.clearList} 
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
          />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
