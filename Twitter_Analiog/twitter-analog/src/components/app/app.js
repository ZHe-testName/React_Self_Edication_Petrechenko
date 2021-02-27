import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

import './app.css';

export default class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: [
                {label: 'Goin to learn React', important: true, id: 1},
                {label: 'It so fuking good', important: false, id: 2},
                {label: 'I like this shit', important: false, id: 3},
                {label: 'I need a break...', important: true, id: 4}
            ]
        }
    }

    deleteItem = (id) => {
        this.setState(({data})  => {
            const newData = data.filter(elem => elem.id !== id);

            return {
                data: newData,
            }
        })
    }

    addItem = (itemText) => {
        const newItem = {
            label: itemText,
            important: false,
            //generating unique id
            id: `f${Date.now().toString(16)}`,
        };
        
        this.setState(({data}) => {
            const newData = [...data, newItem];

            return {
                data: newData,
            }
        })
    }

    render(){
        return (
            <div className='app'>
                <AppHeader/>
    
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/> 
                </div>
    
                <PostList 
                    posts={this.state.data}
                    onDelete={this.deleteItem}/>
    
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
};