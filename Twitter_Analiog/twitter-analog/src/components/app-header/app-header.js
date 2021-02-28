import React from 'react';

import './app-header.css';

const AppHeader = ({liked, allPosts}) => {
    return (
        <div className='app-header d-flex'>
            <h1>ZHeka Horunzhyi</h1>
            <h2>{allPosts} записей, {liked} из них понравилось</h2>
        </div>
    );
};

export default AppHeader;