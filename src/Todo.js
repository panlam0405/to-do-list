import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { v4 } from "uuid";
export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    handleRemove(){
        this.props.delete(this.props.id);
    }

    toggleForm() {
        this.setState({
            isEditing : ! this.state.isEditing
        })
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result =(<div>
                <form>
                    <input type='text'/>
                </form>
            </div>)
        } else {
             result=(<li className="todo">
                <span id={v4() } onClick={this.props.crossItem}>{this.props.todoContent}</span>
                <button onClick={this.toggleForm}><FontAwesomeIcon icon={ faPencil } /></button>
                <button onClick={this.handleRemove}><FontAwesomeIcon icon={ faTrashCan } /></button>
            </li>)
        }
        return result
    }
}