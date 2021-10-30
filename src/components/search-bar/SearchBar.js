import React, {Component} from 'react';
import './SearchBar.css'
import AllBooks from "../all-books/AllBooks";

class SearchBar extends Component {
   constructor(props) {
       super(props);
       this.state = {
           books:[],
           searchTerm: '',
           value:'Please select option'
       }
   }

    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    editSearchTerm = (event) => {
            this.setState({searchTerm: event.target.value});
    }
    dynamicSearch = () => {
       let selected = this.state.value;
       if(selected === "Name"){

       }
    }
    render() {
        return (
            <div>
                <div className={"search_bar"}>
                    <div className={"searcher_box"}>
                        <select id="list" onChange={this.handleChange} defaultValue={this.state.value}>
                            <option value="Please select option">Please select option</option>
                            <option value="Name">Name</option>
                            <option value="Author">Author</option>
                            <option value="Author and name">Author and name</option>
                            <option value="All">All</option>
                        </select>
                        <input type="text" value={this.state.searchTerm} onChange={this.editSearchTerm}/>

                    </div>

                </div>
                <AllBooks books={this.dynamicSearch()}/>
            </div>
        );
    }


}

export default SearchBar;