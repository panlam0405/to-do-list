import React, {Component} from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";

export class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : []
        }
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(todo) {
        this.setState((state) => ({
            todos: [...state.todos, todo],
        }));
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)  
        })
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} id={todo.id} todoContent={todo.todoContent} delete={this.removeTodo } />
        });
        return (
            <div className="todo-list">
                <ul>{todos}</ul>
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}