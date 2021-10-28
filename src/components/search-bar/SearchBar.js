import React, {Component} from 'react';
import './SearchBar.css'
class SearchBar extends Component {
    render() {
        return (
            <div className={"search_bar"}>
                <div className={"searcher_box"}>
                    <select id="list" onChange="getSelectValue()">
                    <option>Please select option</option>
                    <option>Name</option>
                    <option>Author</option>
                    <option>Author and name</option>
                    <option>All</option>
                </select>
                    <input type="text" id="search_bar"/>
                    <button id="btn" onClick="search()">Search</button>
                </div>
                <div className={"check_box"}>
                    <input type="checkbox" id="regex" name="horns"/>
                        <label>Use regex</label>
                </div>
            </div>
        );
    }
}

export default SearchBar;