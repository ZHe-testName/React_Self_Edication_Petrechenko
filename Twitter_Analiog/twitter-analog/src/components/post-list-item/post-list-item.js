import React, {Component} from 'react';
import PostList from '../post-list/post-list';

import './post-list-item.css';

export default class PostListItem extends Component{
    render() {
        let classNames = 'app-list-item d-flex justify-content-between';

        const {label, onDelete, onToggleImportant, onToggleLike, important, like} = this.props;

        if (important){
            classNames += ' important';
        };

        if (like){
            classNames += ' like';
        };
    
        return (<div className={classNames}>
                    <span 
                        className='app-list-item-label'
                        onClick={onToggleLike}>
                        {label}
                    </span>
    
                    <div className='d-flex justify-content-center align-items-center'>
                        <button 
                            className='btn-star btn-sm'
                            type='button'
                            onClick={onToggleImportant}>
                                <i className='fa fa-star'></i>
                        </button>
    
                        <button 
                            className='btn-trash btn-sm'
                            type='button'
                            onClick={onDelete}>
                                <i className='fa fa-trash-o'></i>
                        </button>
    
                        <i className='fa fa-heart'>
    
                        </i>
                    </div>
                </div>);
    }
};
