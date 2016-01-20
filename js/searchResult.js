import React from 'react';
import { Router, Route, Link } from 'react-router'

class SearchResult extends React.Component{

    constructor(props) {
        super(props);
        this.state = {"searchPhrase":props.params.searchPhrase}
    }

    componentDidMount() {
        console.log(456)

    }

    render() {
        return (
            <div className="container">
                <h1>{this.state.searchPhrase}</h1>
            </div>
        )

    }

}

export default SearchResult;