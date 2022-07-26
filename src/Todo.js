import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from "@fortawesome/free-solid-svg-icons";

export class Todo extends Component {


    render() {
        return (
            <div className="todo">
                <span>{this.props.todoContent}</span>
                <span><FontAwesomeIcon icon={ faPencil } /></span>
            </div>
        )
    }
}