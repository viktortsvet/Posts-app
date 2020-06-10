const addPost = (post) => {
    return {
        type: 'ADD_POST',
        post
    }
};

const removePost = (id) => {
    return {
        type: 'REMOVE_POST',
        id
    }
};

const onToggleImportant = (id) => {
    return {
        type: 'TOGGLE_IMPORTANT',
        id
    }
};

const searchPosts = (searchValue) => {
    return {
        type: 'SEARCH_POSTS',
        searchValue
    }
};

export {
    addPost,
    removePost,
    onToggleImportant,
    searchPosts
};