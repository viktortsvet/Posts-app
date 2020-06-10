const initialState = {
    posts: [
        {text: 'Привет! Как дела?', id: 1, important: false},
        {text: 'Пока!', id: 2, important: false}
    ],
    maxId: 3,
    searchInputValue: ''
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                text: action.post,
                id: state.maxId,
                important: false
            };
            const old = state.posts.map(post => {
                return post;
            });
            const newArr = [...old, newPost];
            return {
                ...state,
                posts: newArr,
                maxId: state.maxId += 1
            }
        case 'REMOVE_POST':
            const copyRemove = state.posts.map(post => post);
            const index = copyRemove.findIndex(post => post.id === action.id);
            const resArr = [...copyRemove.slice(0, index), ...copyRemove.slice(index + 1)];
            return {
                ...state,
                posts: resArr
            }
        case 'TOGGLE_IMPORTANT':
            const copyImportant = state.posts.map(post => post);
            const impIndex = copyImportant.findIndex(post => post.id === action.id);
            const oldPost = copyImportant[impIndex];
            const changedPost = {...oldPost, important: !oldPost.important};
            const impArr = [...copyImportant.slice(0, impIndex), changedPost, ...copyImportant.slice(impIndex + 1)];
            return {
                ...state,
                posts: impArr
            }
        case 'SEARCH_POSTS':
            return {
                ...state,
                searchInputValue: action.searchValue
            }
        default:
            return state;
    }
};


export default reducer;