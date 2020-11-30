import React from "react";
import {connect} from "react-redux";

import "./book-page.css";

const BookPage = ({match, books}) => {
    let componentBook, content;

    books.forEach(book => {
        if (book.id.toString() === match.params.id) {
            componentBook = book;
            if(componentBook.image === "") {
                book.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBLYpg6ndIADgEksUze091wG0PCjZ8XqF0uQ&usqp=CAU"
            }
            content = (
                <div className="row">
                    <div className="col-5">
                        <img src={componentBook.image} width="350" height="550" alt=""/>
                    </div>
                    <div className="col-7">
                        <h3>{componentBook.name}</h3>
                        <p>{componentBook.author}, {componentBook.publish_year}</p>
                        <p className="mt-5">Количество страниц: {componentBook.page_count}</p>
                    </div>
                </div>
            )
        }

        if(!componentBook){
            content = (<h1>Page not found!</h1>)
        }
    })


    return <div className="container mt-4">{content}</div>;
}

const mapStateToProps = state => {
    return {
        books: state.books
    }
}

export default connect(mapStateToProps, null)(BookPage);