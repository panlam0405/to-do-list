import React, {Component} from "react";


export class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoContent: ''
        }
    }

    render(){
        return(
            <div className="todo-form">
                <h1>New Todo!</h1>
                <div className="add-todo">
                    <form>
                        <label htmlFor="todo">
                            <input id="todo" placeholder="Add Todo"  />
                        </label>
                        <button>Add Todo</button>
                    </form>
                </div>
            </div>
        )
    }
}