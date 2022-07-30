import React, {Component} from "react";
import { v4 } from "uuid";


export class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoContent: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        let todo = this.state;
        this.props.addTodo({...todo, id:v4(), completed: false});
        this.setState({ todoContent : ""} );
    }

    render(){
        return(
            <div >
                <div className="add-todo">
                    <form className="todo-form" onSubmit={this.handleSubmit}>
                        <label htmlFor="todo">New Todo 
                        </label>
                            <input
                                type='text'
                                name='todoContent'
                                id="todo"
                                value={this.state.todoContent}
                                placeholder="Add Todo"
                                onChange={this.handleChange}/>
                        <button>Add Todo</button>
                    </form>
                </div>
            </div>
        )
    }
}