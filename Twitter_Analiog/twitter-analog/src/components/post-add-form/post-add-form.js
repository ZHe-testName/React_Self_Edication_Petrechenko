import React, {Component} from 'react';

import './post-add-form.css';

export default class PostAddForm extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            inputText: '',
        };
    }

    onValueChange = (event) => {
        this.setState({
            inputText: event.target.value,
        });
    }

    onSubmit = (event) => {
        event.preventDefault();

        //space control
        if (this.state.inputText.trim().length !== 0){
            this.props.onAdd(this.state.inputText);
        };

        this.setState({
            inputText: '',
        });
    }

    render(){
        return (
            <form className='bottom-panel d-flex'
                onSubmit={this.onSubmit}>
                <input
                    className='form-control new-post-label'
                    type='text'
                    placeholder='О чем Вы думаете сейчас?'
                    value={this.state.inputText}
                    onChange={this.onValueChange}/>
    
                <button
                    className='btn btn-outline-secondary'
                    type='submit'>Добавить</button>
            </form>
        );
    }
};