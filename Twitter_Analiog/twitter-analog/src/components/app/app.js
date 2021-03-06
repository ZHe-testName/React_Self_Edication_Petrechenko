import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form'

//Стилизовать приложение можно несколькими способами

//1-Можно подключить библиотеку Resct-strap и bootstrap 4(предположым)
//с помощью npm. И иапользовать уже готовые стилизированые компоненты которые 
//они содержат

//2-использовать css модули для стилизации компонентов
//чтобы react понимал что это модули названия css-файлов нужно 
//правильно составлять
//Например App.module.css
//тогда все стили будут инкапсулированы
//и не будет конфликтов

//3-CSSinJS
//Интересная технология которая позволяет писать правила стилей прямо в js файле компонента
//проект будет переписан на эту технологию максимально
//ДЛя этого будет использована одна из мньжества библиотек(styled-components)

// import './app.css';
import styled from 'styled-components';

//Это cssinjs 
//в таких объектах можго прописывать любую вложеность
//Например для условного h1

// const StyledApp = styled.div`
//     margin: 0 auto;
//     max-width: 800px;
//     h1{
//      color: blue;
//      p{
//         font-size: ${props.largeSize ? '34px' : '23px'};
//      }
//     }
// `;

const StyledApp = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledSearchPanel = styled.div`
    display: flex;
    margin: 1rem 0;
`;

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
            <StyledApp
                    //если нам тут в место дива нужен какой то другой html элемент
                    //(к примеру ссылка 'а')
                    //мы можем на месте использовать данную конструкцию
                    //<StyledApp as='a'></StyledApp>

                    //теперь мы получим элемент-ссылку
                >
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
    
                <StyledSearchPanel>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                        filterRule={filterRule}
                        onFilterSelect={this.onFilterSelect}/> 
                </StyledSearchPanel>
    
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}/>
    
                <PostAddForm
                    onAdd={this.addItem}/>
            </StyledApp>
        );
    }
};