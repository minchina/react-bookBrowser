import React from 'react';

let Hello = React.createClass({

    getInitialState() {
        return {isLoading: false}
    },
    handleSubmit(){
        console.log(this.state.text)
    },
    onChange: function (e) {
        this.setState({text: e.target.value});
    },

    render() {
        return (
            <div className="container">
                <form>
                    <h1>BookBrowser</h1>
                    <h4>Find books containing:</h4>
                    <input type="text" onChange={this.onChange} placeholder="javascript"/>
                    <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Search</button>
                </form>
            </div>
        )

    }
});

export default Hello;