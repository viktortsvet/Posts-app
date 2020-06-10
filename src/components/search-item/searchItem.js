import React, {Component} from 'react';


export default class SearchItem extends Component {

    updateSearch = (e) => {
        const term = e.target.value;
        this.props.searchPosts(term);
    }

    render() {
        return (
            <input type="text" className="form form-control" 
                placeholder="Поиск по записям" 
                onChange={this.updateSearch}/>
        )
    }
}
