import React, {useState} from "react";
import {connect} from 'react-redux';
import {useForm} from "react-hook-form"
import {Redirect} from "react-router-dom";
import {createBook} from "../../redux/actions";

import './book-form.css';

const BookForm = ({createBook}) => {
    const [redirect, setRedirect] = useState(false);
    const [id, setId] = useState(null);
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        const newBook = {
            id: Date.now().toString(),
            name: data.name,
            author: data.author,
            page_count: data.page_count,
            publish_year: data.publish_year,
            image: data.image
        }
        createBook(newBook);

        setId(newBook.id);
        setRedirect(true);
    }

    return (
        <div className="book-form container mt-4">
            {redirect ? <Redirect to={`/book/${id}`} /> : null}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group row mt-4">
                    <label htmlFor="name" className="col-sm-4 col-form-label">Название книги</label>
                    <div className="col-sm-8">
                        <input type="text" placeholder="Введите текст"
                               name="name"
                               className="form-control" id="name"
                               ref={register({required: true, pattern: /^[A-Za-zА-Я\s]+$/i})}/>
                        {errors.name && errors.name.type === "required" &&
                        <span className="ml-2" style={{color: "red"}}>*Обязательное поле</span>}
                        {errors.name && errors.name.type === "pattern" &&
                        <span className="ml-2" style={{color: "red"}}>*Требуется значение, состоящее из букв</span>}
                    </div>

                </div>
                <div className="form-group row mt-4">
                    <label htmlFor="author" className="col-sm-4 col-form-label">Имя автора</label>
                    <div className="col-sm-8">
                        <input type="text" placeholder="Введите текст"
                               name="author"
                               className="form-control" id="author"
                               ref={register({required: true, pattern: /^[A-Za-zА-Я\s]+$/i})}/>
                        {errors.author && errors.author.type === "required" &&
                        <span className="ml-2" style={{color: "red"}}>*Обязательное поле</span>}
                        {errors.author && errors.author.type === "pattern" &&
                        <span className="ml-2" style={{color: "red"}}>*Требуется значение, состоящее из букв</span>}
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <label htmlFor="page_count" className="col-sm-4 col-form-label">Количество страниц
                    </label>
                    <div className="col-sm-8">
                        <input type="number" placeholder="Введите число"
                               name="page_count"
                               className="form-control" id="page_count"
                               ref={register({required: true, min: 0})}/>
                        {errors.page_count && errors.page_count.type === "required" &&
                        <span className="ml-2" style={{color: "red"}}>*Обязательное поле</span>}
                        {errors.page_count && errors.page_count.type === "min" &&
                        <span className="ml-2" style={{color: "red"}}>*Значение не может быть отрицательным</span>}

                    </div>
                </div>
                <div className="form-group row mt-4">
                    <label htmlFor="year" className="col-sm-4 col-form-label">Год издания</label>
                    <div className="col-sm-8">
                        <input type="number" placeholder="Введите число"
                               name="publish_year"
                               className="form-control" id="year"
                               ref={register({required: true, min: 0})}/>
                        {errors.publish_year && errors.publish_year.type === "required" &&
                        <span className="ml-2" style={{color: "red"}}>*Обязательное поле</span>}
                        {errors.publish_year && errors.publish_year.type === "min" &&
                        <span className="ml-2" style={{color: "red"}}>*Значение не может быть отрицательным</span>}
                    </div>
                </div>
                <div className="form-group row mt-4">
                    <label htmlFor="image" className="col-sm-4 col-form-label">Обложка книги</label>
                    <div className="col-sm-8">
                        <input type="text" placeholder="Введите URL картинки" className="form-control"
                               id="image"
                               name="image"
                               ref={register}/>
                    </div>
                </div>
                <button className="btn btn-success" type="submit">Добавить книгу</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = {
    createBook
};

export default connect(null, mapDispatchToProps)(BookForm);