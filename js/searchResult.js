import React from 'react';
import { Router, Route, Link } from 'react-router'

let SearchResult = React.createClass({

    getInitialState() {
        return {"searchPhrase": ""}
    },

    componentDidMount(){

        this.setState({"searchPhrase":this.props.params.searchPhrase})
    },

    render() {
        return (
            <div className="container">
                <h1>{this.state.searchPhrase}</h1>
            </div>
        )

    }
});

export default SearchResult;