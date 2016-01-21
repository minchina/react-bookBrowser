import React from 'react';
import { Router, Route, Link } from 'react-router'

let Search = React.createClass({

    getInitialState() {
        return {"text": ""}
    },
    onChange: function (e) {
        this.setState({"text": e.target.value});
    },

    render() {
        return (
            <div className="container">
                <form>
                    <h1>BookBrowser</h1>
                    <h4>Find books containing:</h4>
                    <input type="text" onChange={this.onChange} placeholder="javascript"/>
                    <Link to={`/searchResult/${this.state.text}`} className="btn btn-primary">Search</Link>
                </form>
            </div>
        )
    }
});

export default Search;