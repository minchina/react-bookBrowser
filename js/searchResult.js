import React from 'react';
import { Router, Route, Link } from 'react-router'

var buildUrl = function (q) {
    return 'https://www.googleapis.com/books/v1/volumes?q='
        + encodeURIComponent(q)
        + '&langRestrict=en&maxResults=40';
};


let SearchResult = React.createClass({

    getInitialState() {
        return {"searchPhrase": this.props.params.searchPhrase, "items": []}
    },

    componentDidMount() {

        fetch(buildUrl(this.state.searchPhrase))
            .then(response => response.json())
            .then(jsonData => {
                this.setState({
                    "items": jsonData.items
                });
                console.dir(this.state.items)
            })
            .catch(error => console.dir(error))
    },

    render() {
        return (
            <div className="container">
                <h1>You are searching: {this.state.searchPhrase}</h1>
                <ul>
                    {this.state.items.map(function (item, index) {
                        return <li key={index}>{item.volumeInfo.title}</li>
                    }.bind(this))
                    }
                </ul>
            </div>


        )

    }

});

export default SearchResult;