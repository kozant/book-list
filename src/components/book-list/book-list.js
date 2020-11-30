import React from "react";
import {connect} from "react-redux";
import BookItem from "../book-item/book-item";

const BookList = ({books}) => {
    const elements = books.map((book) => {
        return <BookItem key={book.id} book={book}/>
    })
    return (
        <div className="container mt-3">
            <div className="row row-cols-4">{elements}</div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, null)(BookList);
