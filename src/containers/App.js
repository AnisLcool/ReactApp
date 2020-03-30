import React, { Component } from 'react';
import {setSearchField} from './../actions.js';
import {connect} from 'react-redux';
import CardList from './../components/cardList';
import SearchBox from './../components/SearchBox';
import { champs } from './../data/Champions.js'
import Scroll from './../components/Scroll.js';
import 'tachyons';
import './../components/Card.css';
import ErrorBoundry from './../components/errorBoundry.js';



const mapStateToProps = (state) => {
    return {
        searchField:state.searchField
    }}
const mapDispatchToProps = (dispatch) => {
     return {
         onSearchChange: (event) => dispatch(setSearchField(event.target.value))
     };
 }


class App extends Component {
    constructor() {
        super();
        this.state = {
            champions: []
        }
    }
    componentDidMount(){
        
        this.setState({champions:champs})
    }
    
    render() {
        const {searchField, onSearchChange} = this.props;
        const filterChamps = this.state.champions.filter((champ) => {
            return champ.name.toLowerCase().includes(searchField);
        })
        
        return (
            <div className="tc">
        <h1 className="f1">TFT Galaxy Champions</h1>
        <SearchBox searchChange={onSearchChange}/>
        
        <Scroll>
        <ErrorBoundry>
            <CardList champs={filterChamps}/>
        </ErrorBoundry>
        </Scroll>
        </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


