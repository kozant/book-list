import {CREATE_BOOK} from "./types";

export function createBook(book) {
    return {
        type: CREATE_BOOK,
        payload: book
    }
}