import { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import './Todo.css';
export class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            content: this.props.todoContent
        }
        this.handleRemove = this.handleRemove.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleComplete = this.handleComplete.bind(this);
    }

    handleRemove(){
        this.props.delete(this.props.id);
    }

    toggleForm() {
        this.setState({
            isEditing : ! this.state.isEditing
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.saveContent(this.props.id, this.state.content);
        this.setState({ isEditing: false });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleComplete() {
        this.props.complete(this.props.id);
    }

    render() {
        let result;
        if (this.state.isEditing) {
            result =(<div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='content' onChange={this.handleChange} value={this.state.content } />
                    <button> Save</button>
                </form>
            </div>)
        } else {
             result=(<li className={this.props.completed ? 'completed todo' : 'todo'}>
                <span onClick={this.handleComplete}>{this.props.todoContent}</span>
                <button onClick={this.toggleForm}><FontAwesomeIcon icon={ faPencil } /></button>
                <button onClick={this.handleRemove}><FontAwesomeIcon icon={ faTrashCan } /></button>
            </li>)
        }
        return result
    }
}