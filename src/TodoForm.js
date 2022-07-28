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
        this.props.addTodo({...todo, id:v4()});
        this.setState({ todoContent : ""} );
    }

    render(){
        return(
            <div className="todo-form">
                <h1>New Todo!</h1>
                <div className="add-todo">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="todo">New Todo
                            <input
                                type='text'
                                name='todoContent'
                                id="todo"
                                value={this.state.todoContent}
                                placeholder="Add Todo"
                                onChange={this.handleChange}/>
                        </label>
                        <button>Add Todo</button>
                    </form>
                </div>
            </div>
        )
    }
}