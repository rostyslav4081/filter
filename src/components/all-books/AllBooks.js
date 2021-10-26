import React, {Component} from 'react';
import Book from "../book/Book";
import {BookService} from "../../services/BookService";

class AllBooks extends Component {
    bookService = new BookService();
    state = {books: []};

    render() {
        let {books} = this.state;
        return (

            <div>
                {
                    books.map(book => <Book item={book} key={book.id}/>)

                }
            </div>
        );
    }

    componentDidMount() {
        this.bookService.getAllBooks().then(value => this.setState({books: value}));
    }

}

export default AllBooks;