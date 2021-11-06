import React, {Component} from 'react';
import './SearchBar.css'
import AllBooks from "../all-books/AllBooks";
import {BookService} from "../../services/BookService";

class SearchBar extends Component {
    bookService = new BookService();

       state = {
           books:[],
           searchTerm: '',
           value:'Please select option',
           isReady: false
       }


    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }

    editSearchTerm = (event) => {
            this.setState({searchTerm: event.target.value});
    }
    dynamicSearch = () => {
       let selected = this.state.value;
        console.log(selected);
        if(selected === "Name"){
            this.bookService.getAllBooks().then(value => this.setState({books:value.filter(book => book.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))}));
       }
       if(selected ==="Author"){
           this.bookService.getAllBooks().then(value => this.setState({books:value.filter(book => book.info.author.toLowerCase().includes(this.state.searchTerm.toLowerCase()))}));
       }
       if(selected ==="Author and name"){
           this.bookService.getAllBooks().then(value => this.setState({books:value.filter(book => book.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())||book.info.author.toLowerCase().includes(this.state.searchTerm.toLowerCase()))}));
       }
       if(selected === "All"){
           this.bookService.getAllBooks().then(value => this.setState({books:value.filter(book => book.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || book.info.author.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || book.info.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))}));
       }
       if(selected === "Please select option"){
           alert("Please select option");
       }
    }
    render() {
           console.log(this.state);
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
                        <button type={'submit'} onClick={this.dynamicSearch}>Search</button>
                    </div>

                </div>
                {this.state.isReady&&(<AllBooks books={this.state.books}/>)}
            </div>
        );
    }
     componentDidMount() {
          this.bookService.getAllBooks().then(value => this.setState({books: value,isReady:true}));
    }

}

export default SearchBar;