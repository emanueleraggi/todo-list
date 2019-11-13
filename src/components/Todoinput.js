import React, { Component } from "react"

export default class Todoinput extends Component {    
    render() {
        // destructuring
        const {item, handleChange, handleSubmit, editItem} = this.props;
        return( 
        <div className="card card-body my-3">
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                            {/* font awesome icon */}
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <input 
                        type="text" 
                        className="form-control text-capitalize" 
                        placeholder="add a todo item"
                        value={item}
                        onChange={handleChange}
                    />
                </div>
                {/* conditional rendering means that the button will show either add item or edit item */}
                <button type="submit" 
                className={
                    editItem ?
                    "btn btn-block btn-success mt-3":
                    "btn btn-block btn-primary mt-3"
                }
                >
                 {editItem ? "edit item" : "add item"}
                </button>
            </form>
        </div>
        );
    }
}
