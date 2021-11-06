import React, {Component} from 'react';
import Book from "../book/Book";

import './AllBook.css'

class AllBooks extends Component {


    render() {
        let {books} = this.props;
        console.log(books);
        let size = Math.ceil(books.length/3)
        return (

            <div className={"all_books"}>
                <div className={"col"}>
                    {
                        books.slice(0, size).map(book => <Book item={book} key={book.id}/>)

                    }
                </div>
                <div className={"col"}>
                    {
                        books.slice(size, 2*size).map(book => <Book item={book} key={book.id}/>)

                    }
                </div>
                <div className={"col"}>
                    {
                        books.slice(2*size, books.length).map(book => <Book item={book} key={book.id}/>)
                    }
                </div>
            </div>

        );
    }



}

export default AllBooks;