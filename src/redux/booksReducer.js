import {CREATE_BOOK} from "./types";

const initialState = {
    books:
        [{
            id: 1,
            name: "Climbing Mount Improbable",
            image: "https://s5-goods.ozstatic.by/2000/179/909/10/10909179_0.jpg",
            author: "Richard Dawkins",
            page_count: 416,
            publish_year: 2019
        }, {
            id: 2,
            name: "Why Orwell Matters",
            image: "https://s2-goods.ozstatic.by/2000/123/586/10/10586123_0.jpg",
            author: "Christopher Hitchens",
            page_count: 256,
            publish_year: 2017
        }, {
            id: 3,
            name: "The Theory of Everything",
            image: "https://s2-goods.ozstatic.by/2000/703/665/10/10665703_0.jpg",
            author: "Stephen Hawking",
            page_count: 60,
            publish_year: 2017
        }, {
            id: 4,
            name: "Climbing Mount Improbable",
            image: "https://s5-goods.ozstatic.by/2000/179/909/10/10909179_0.jpg",
            author: "Richard Dawkins",
            page_count: 416,
            publish_year: 2019
        }, {
            id: 5,
            name: "Why Orwell Matters",
            image: "https://s2-goods.ozstatic.by/2000/123/586/10/10586123_0.jpg",
            author: "Christopher Hitchens",
            page_count: 256,
            publish_year: 2017
        }, {
            id: 6,
            name: "The Theory of Everything",
            image: "https://s2-goods.ozstatic.by/2000/703/665/10/10665703_0.jpg",
            author: "Stephen Hawking",
            page_count: 160,
            publish_year: 2017
        }]
}

export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_BOOK:
            return {...state, books: state.books.concat(action.payload)}
        default:
            return state;
    }
}