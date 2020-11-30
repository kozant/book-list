import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "../navbar/navbar";
import BookForm from "../book-form/book-form";
import BookList from "../book-list/book-list";
import BookPage from "../book-page/book-page";

import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={BookList}/>
                    <Route exact path="/form" component={BookForm}/>
                    <Route path="/book/:id" component={BookPage}/>
                    <Route render={() => <div className="container mt-4"><h1>Page not found!</h1></div>}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;