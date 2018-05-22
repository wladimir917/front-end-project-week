import React, { Component } from 'react';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: ''
        }
    }

    componentDidMount () {
        if(this.props.note) {
            this.setState({title: this.props.note.title, content: this.props.note.content});
        }
    }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }

    onSubmitHandler = () => {
        console.log("Form Updated")
    }

    render() { 
        return (
            <div className="App-content-container">
                <h2>{this.props.header}</h2>
                <form>
                    <div>
                        <input className="input-tittle"
                            name="title"
                            value={this.state.title}
                            placeholder="Note Title"
                            onChange={this.onChangeHandler}
                        />
                     </div>
                     <div>
                     <textarea className="input-content"
                            name="content"
                            value={this.state.content}
                            placeholder="Note Content"
                            onChange={this.onChangeHandler}
                        />
                     </div>
                </form>
                <button className="save-button" onClick={this.onSubmitHandler}>
                    {this.props.button}
                </button>
            </div>
        )
    }
}
 
export default NoteForm;