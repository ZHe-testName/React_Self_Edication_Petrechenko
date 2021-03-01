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
                {label: 'Goin to learn React', important: false, like: false, id: 1},
                {label: 'It so fuking good', important: false, like: false, id: 2},
                {label: 'I like this shit', important: false, like: false, id: 3},
                {label: 'I need a break...', important: false, like: false, id: 4}
            ],
            term: '',
            filterRule: 'all',
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
            like: false,
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

    onToggleImportant = (id) => {
        this.setState(({data}) => {
            const newData = data.map(item => {
                const newItem = {...item};

                if (newItem.id === id){
                    newItem.important = !newItem.important;
                };

                return newItem;
            });

            return {
                data: newData,
            }
        });
    }

    onToggleLike = (id) => {
        this.setState(({data}) => {
            const newData = data.map(item => {
                const newItem = {...item};

                if (newItem.id === id){
                    newItem.like = !newItem.like;
                };

                return newItem;
            });

            return {
                data: newData,
            }
        });
    }

    searchPosts = (items, term) => {
        if (term.length === 0){
            return items;
        };

        return items.filter(item => item.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    filterPosts = (items, filter) => {
        if (filter === 'liked') return items.filter(item => item.like);

        if (filter === 'all') return items;
    }

    onFilterSelect = (filterRule) => {
        this.setState({filterRule});
    }

    render(){
        const {data, term, filterRule} = this.state;

        const liked = data.filter(item => item.like)
                                                    .length;

        const allPosts = data.length;

        const visiblePosts = this.filterPosts(this.searchPosts(data, term), filterRule);

        return (
            <div className='app'>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
    
                <div className='search-panel d-flex'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filterRule={filterRule}
                        onFilterSelect={this.onFilterSelect}/> 
                </div>
    
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
    
                <PostAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
};