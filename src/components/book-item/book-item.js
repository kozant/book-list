import React from "react";
import {Link} from "react-router-dom";

import "./book-item.css";

const BookItem = ({book}) => {

    if(book.image === "") {
        book.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLYpg6ndIADgEksUze091wG0PCjZ8XqF0uQ&usqp=CAU"
    }

    return (
        <div className="book-item col">
            <Link to={`/book/${book.id}`}>
                <img src={book.image} width="130" height="250" alt=""/>
                <div>
                    <p>{book.name}</p>
                    <p>{book.author}, {book.publish_year}</p>
                </div>
            </Link>
        </div>

    );
}

export default BookItem;