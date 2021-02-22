import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

import './app.css';

const App = () => {
    const data = [
        {label: 'Goin to learn React', important: true, id: 'www'},
        {label: 'It so fuking good', important: false, id: 'ddd'},
        {label: 'I like this shit', important: false, id: 'ggg'},
        {label: 'I need a break...', important: true, id: 'lll'}
    ];
    return (
        <div className='app'>
            <AppHeader/>

            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/> 
            </div>

            <PostList posts={data}/>

            <PostAddForm/>
        </div>
    );
};

export default App;