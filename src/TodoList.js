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
        this.addTodo = this.addTodo.bind(this);
        this.saveTodo = this.saveTodo.bind(this);
        this.complete = this.complete.bind(this);
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
    saveTodo(id,item) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, todoContent: item }
            }
            return todo;
        });
        this.setState({ todos : updatedTodos });
    }

    complete(id) {
        const completedTodos = this.state.todos.map(todo => {
            if (id === todo.id) {
               let result = !todo.completed;
                return { ...todo, completed: result };
            }
            return todo
        });
        this.setState({ todos: completedTodos });
    }

    render() {
        let todos = this.state.todos.map(todo => {
            return <Todo key={todo.id} id={todo.id} saveContent={this.saveTodo} todoContent={todo.todoContent} complete={this.complete} delete={this.removeTodo} completed={ todo.completed} />
        });
        return (
            <div className="todo-list">
                <ul>{todos}</ul>
                <TodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}