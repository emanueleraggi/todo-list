import React, { Component } from "react"
import Todoitem from "./Todoitem"
export default class Todolist extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit} = this.props;
        return (
            <ul className="list-group my-5">
                <h3 className="text-capitalize text-center">todo list</h3>
                {items.map(item => {
                    return <Todoitem 
                    key={item.id} 
                    title={item.title} /* we now have access to the item id */
                    handleDelete={() => handleDelete(item.id)}
                    handleEdit={() => handleEdit(item.id)}
                    />

                })}

                {/* the map method is going to loop through the whole array
                as we are looping we want to search for the key and the title */}

                <button 
                type="button" 
                className="btn btn-danger btn-block text-capitalize mt-5"
                onClick={clearList}
                >
                    clear list
                </button>
            </ul>
        );
    }
}
