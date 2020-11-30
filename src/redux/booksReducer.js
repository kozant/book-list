import {CREATE_BOOK} from "./types";

let _id = 0;

const initialState = {
    books: [
        {
            id: _id++,
            name: 'Восхождение на гору Невероятности',
            author: 'Ричард Докинз',
            page_count: 416,
            publish_year: 2019,
            image: "https://s5-goods.ozstatic.by/2000/179/909/10/10909179_0.jpg",
        },
        {
            id: _id++,
            name: 'Почему так важен Оруэлл',
            author: 'Кристофер Хитченс',
            page_count: 256,
            publish_year: 2017,
            image: "https://s2-goods.ozstatic.by/2000/123/586/10/10586123_0.jpg",
        },
        {
            id: _id++,
            name: 'Теория Всего',
            author: 'Стивен Хокинг',
            page_count: 160,
            publish_year: 2017,
            image: "https://s2-goods.ozstatic.by/2000/703/665/10/10665703_0.jpg"
        },
        {
            id: _id++,
            name: 'Восхождение на гору Невероятности',
            author: 'Ричард Докинз',
            page_count: 416,
            publish_year: 2019,
            image: "https://s5-goods.ozstatic.by/2000/179/909/10/10909179_0.jpg",
        },
        {
            id: _id++,
            name: 'Почему так важен Оруэлл',
            author: 'Кристофер Хитченс',
            page_count: 256,
            publish_year: 2017,
            image: "https://s2-goods.ozstatic.by/2000/123/586/10/10586123_0.jpg",
        },
        {
            id: _id++,
            name: 'Теория Всего',
            author: 'Стивен Хокинг',
            page_count: 160,
            publish_year: 2017,
            image: "https://s2-goods.ozstatic.by/2000/703/665/10/10665703_0.jpg"
        }
    ]
}

export const booksReducer = (state = initialState, action) => {
    switch(action.type) {
        case CREATE_BOOK:
            return {...state, books: state.books.concat(action.payload)}
        default: return state;
    }
}