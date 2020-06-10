import React, {Component} from 'react';
import {removePost, onToggleImportant} from '../../actions/index';
import {connect} from 'react-redux';

class PostItem extends Component {
    render() {
        const {post, removePost, onToggleImportant} = this.props;
        let clazz = 'fa fa-star';
        if (post.important) {
            clazz += ' important';
        }
        return (
            <div className="d-flex justify-content-between align-items-center">
                <div className="postItem-text">{post.text}</div>
                <i onClick={() => onToggleImportant(post.id)} className={clazz}></i>
                <button onClick={() => removePost(post.id)} 
                    className="btn btn-outline-danger">Удалить запись</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    removePost,
    onToggleImportant
};

export default connect(undefined, mapDispatchToProps) (PostItem);