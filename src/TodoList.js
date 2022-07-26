import React, {Component} from "react";
import { Todo } from "./Todo";

export class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            todos : []
        }
    }

    render(){
        return (
            <div className="todo-list">
                <Todo/>
            </div>
        )
    }
}