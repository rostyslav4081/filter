import React, {Component} from 'react';
import Book from "../book/Book";
import {BookService} from "../../services/BookService";
import './AllBook.css'

class AllBooks extends Component {
    bookService = new BookService();
    state = {books: []};

    render() {
        let {books} = this.state;
        return (

            <div className={"all_books"}>
                <div className={"col"}>
                    {
                        books.slice(0, 75).map(book => <Book item={book} key={book.id}/>)

                    }
                </div>
                <div className={"col"}>
                    {
                        books.slice(75, 150).map(book => <Book item={book} key={book.id}/>)

                    }
                </div>
                <div className={"col"}>
                    {
                        books.slice(150, 225).map(book => <Book item={book} key={book.id}/>)
                    }
                </div>
            </div>

        );
    }

    componentDidMount() {
        this.bookService.getAllBooks().then(value => this.setState({books: value}));
    }

}

export default AllBooks;