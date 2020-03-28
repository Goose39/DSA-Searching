import React from 'react';
import './App.css';
import Data from './data';

class App extends React.Component {
  state = {
    searchItem: null,
    result: ""
  }

  handleValue = (searchItem) => {
    this.setState({
      searchItem
    })
  }

  linearSearch = () => {
    let arr = Data;
    let searchItem = parseInt(this.state.searchItem)
    let result = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === searchItem) {
        result = `${searchItem} found with ${i} searches`;
        return this.setState(
          { result }
        )  
      }
    }
  }

  binarySearch = (array, value=parseInt(this.state.searchItem), start, end, count=0) => {
    let result = '';
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if (start > end) {
        result = `${value} not found`;
        
        return this.setState(
          { result }
        ) 
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];
    count++
    
    if (item === value) {
        result = `${value} found with ${count} searches`;
        return this.setState(
          {
            result
          }
        )
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end, count);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1, count);
    }

  }
  render() {
    return (
      <div className="App">
        <form>
          <input type="text" onChange={(e) => this.handleValue(e.target.value)}></input>
          <input type="button" value="Linear" onClick={() => this.linearSearch(Data)}></input>
          <input type="button" value="Binary" onClick={() => this.binarySearch(Data.sort(function(a, b){return a-b}))}></input>
        </form>
      <div className="result">{this.state.result}</div>
      </div>
    );
  }
}

export default App;
