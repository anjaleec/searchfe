import React, { Component } from 'react';
import axios from "axios";


class Search extends Component {
    state = {};

    submitFunction = (e) => {
        console.log("this.state-------", this.state);
        e.preventDefault();
        if (this.state.searchTermValue.length < 3) {
            alert("Search Term must be >= 3 characters")
        } else {
            console.log("searchTermValue---", this.state.searchTermValue);
            let header = {
                searchterm: this.state.searchTermValue
            }
            axios({
                method: "get",
                url: "http://localhost:3213/search",
                headers: header
            })
                .then(response => {
                    console.log(response);
                    let searchResults = [];
                    if (response.data.result && response.data.result.length > 0) {
                        response.data.result.map((searchitem, i) => {
                            searchResults.push(
                                <tr key={searchitem}>
                                    <td>{i + 1}</td>
                                    <td>{searchitem}</td>
                                </tr>
                            )
                        })
                        this.setState({
                            searchResults
                        }, () => {
                            console.log("this.setstate successful");
                        });
                    } else {
                        this.setState({
                            searchResults: []
                        });
                        alert("No Results Found!")
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    handleSearchTerm = e => {
        this.setState({
            searchTermValue: e.target.value
        });
    };

    render() {
        let searchResult;
        if (this.state.searchResults && this.state.searchResults.length > 0) {
            searchResult = (
                <div className='searchTable'>
                    <table className="fixed">
                        <thead>
                            <tr>
                                <th>Sr. No. (Rank)</th>
                                <th>Result</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.searchResults}
                        </tbody>
                    </table>
                </div>
            )
        } else {
            searchResult = (
                <div />
            )
        }

        return (<div>
            <div>
                <div className="home-header"></div>
            </div>
            <div className="form-element">
                <div className="input-element">
                    <form onSubmit={this.submitFunction}>
                        <label for="searchterm" className="field-element">Search Term:</label>
                        <input
                            id="searchterm"
                            className="searchterm-input"
                            type="text"
                            value={this.state.searchTermValue}
                            onChange={this.handleSearchTerm}
                        />
                        <input className="submit-btn" type="submit" value="SEARCH" />
                    </form>
                </div>
            </div>
            <div>
                {searchResult}
            </div>
        </div>);
    }
}

export default Search;