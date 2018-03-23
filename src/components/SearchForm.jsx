import React, { Component } from 'react'

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            showSearch: false
        }
    }

    searchSet = (event) => {
        event.preventDefault()
        const searchItem = this.searchItem.value
        this.props.searchSpot(searchItem)
        this.searchForm.reset()
    }

    toggleSearch = (event) => {
        this.setState({
            showSearch: !this.state.showSearch
        })
    }

    render(){
        return(
            <form id="search-form" action="submit" onSubmit={(e) => {this.searchSet(e)}} ref={(input) => {this.searchForm = input}}>
                <div onClick={(e) => this.toggleSearch(e)}>
                    <i id="search-icon" className="fa fa-search" aria-hidden="true"></i>
                </div>
                <input id={!this.state.showSearch ? "search-input-hidden" : "search-input"} type="text" ref={(input) => {this.searchItem = input}}/>
            </form>
        )
    }
}

export default SearchForm
