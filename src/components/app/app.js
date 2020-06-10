import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostList from '../post-list';
import Header from '../header';

import '../../styles/style.sass';

class App extends Component {

    onFilterPosts = (items, value) => {
        if (value.length === 0) {
            return items;
        }
        return items.filter(item => {
            return item.text.toLowerCase().indexOf(value.toLowerCase().trim()) > -1 
        });
    };
 
    render() {
        const {posts, searchInputValue} = this.props;
        const visiblePosts = this.onFilterPosts(posts, searchInputValue);
        return (
            <div className="container">
                <Header/>
                <PostList posts={visiblePosts}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        searchInputValue: state.searchInputValue
    }
};

export default connect(mapStateToProps, undefined) (App);