import React, {Component} from 'react';
import {addPost, searchPosts} from '../../actions/index';
import {connect} from 'react-redux';
import SearchItem from '../search-item';

class Header extends Component {

    state = {
        inputValue: ''
    };

    onInputChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }

    onAddPost = (value) => {
        this.setState({inputValue: ''});
        if (value.trim() === '') {
            return;
        }
        this.props.addPost(value);
    }

    render() {
        const {inputValue} = this.state;
        const {posts} = this.props;
        const importantPosts = posts.filter(post => post.important);
        return (
            <>
                <h1 className="header">Записи</h1>
                <input className="form form-control" 
                    onChange={this.onInputChange} 
                    value={inputValue} 
                    placeholder="Напишите что-нибудь..."/>
                <button onClick={() => this.onAddPost(inputValue)} 
                    className="btn btn-outline-success">Добавить</button>
                <div>Количество записей: {posts.length} из них важных записей: {importantPosts.length}</div>
                <SearchItem searchPosts={this.props.searchPosts}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
};

const mapDispatchToProps = {
    addPost,
    searchPosts
};

export default connect(mapStateToProps, mapDispatchToProps) (Header);