import React, {Component} from 'react';
import PostItem from '../post-item';

export default class PostList extends Component {
    render() {
        const {posts} = this.props;
        const shownPosts = posts.map((post, index) => {
            return (
                <li className="list-group-item animated" key={index}><PostItem post={post}/></li>
            )
        });
        return (
            <ul className="list-group">{shownPosts}</ul>
        )
    }
}