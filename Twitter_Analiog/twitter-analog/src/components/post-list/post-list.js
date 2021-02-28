import React from 'react';

import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLike}) => {
    const postItems = posts.map(post => {
        const {id , ...itemPorops} = post;

        return (
            <li key={id} className='list-group-item'>
                <PostListItem 
                    {...itemPorops}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLike={() => onToggleLike(id)}/>
            </li>
        );
    });
    return (
        <div className='app-list list-group'>
            {postItems}
        </div>
    );
};

export default PostList;