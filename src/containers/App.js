import React, { Component } from 'react';
import CardList from './../components/cardList';
import SearchBox from './../components/SearchBox';
import { champs } from './../data/Champions.js'
import Scroll from './../components/Scroll.js';
import 'tachyons';
import './../components/Card.css';
import ErrorBoundry from './../components/errorBoundry.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            champions: [],
            searchField: ''
        }
    }
    componentDidMount(){
        this.setState({champions:champs})
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value})
        // let's change the champs list:
        
    }
    render() {
        const filterChamps = this.state.champions.filter((champ) => {
            return champ.name.toLowerCase().includes(this.state.searchField);
        })
        
        return (
            <div className="tc">
        <h1 className="f1">TFT Galaxy Champions</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        
        <Scroll>
        <ErrorBoundry>
            <CardList champs={filterChamps}/>
        </ErrorBoundry>
        </Scroll>
        </div>
        );
    }
}

export default App;