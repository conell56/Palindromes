import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { value: '' };
    this.state = { arrayValue: '' };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log("The State Is: " + e.target.value);
    //Disect and set the value of the given string
    var evntTargVal = e.target.value;
    var strVal = evntTargVal.trim(" ").split(" ");

    var palArray = [];
    var letters = /^[A-Za-z]+$/;

    //Loop to observe element of the string array
    for (var x = 0; x < strVal.length; x++) {
      var pal = true;
      var word = strVal[x].trim(" ").split("");

      //Loop to observe and compare each letter of the string
      for (var y = 0; y < (Math.floor(word.length / 2)); y++) {
        //Check to see if the last character is a letter
        if (!word[word.length - 1].match(letters)) {
          word.splice((word.length - 1), 1);
        }

        //Check to see if the second to last character is a letter
        if (!word[word.length - 2].match(letters)) {
          word.splice((word.length - 2), 1);
        }

        //Compare first and last letters
        if (word[y] !== word[word.length - (y + 1)]) {
          pal = false;
        }
      }
      if (pal) {
        if (strVal[x]) {

          palArray.push(strVal[x]);

        }
      }
    }
    //console.log("strVal " + strVal);
    //console.log("palArray " + palArray);
    
    //Set the values for the list
    this.setState({ arrayValue: palArray.map((p) => <li>{p}</li>) });
  }

  render() {
    return (
      <div className="App">
        <p className="App-para">
          Enter a paragraph to see if it contains any palindromes.
        </p>

        <form>
          <textarea value={this.state.value} onChange={this.handleChange} />
          <br />

        </form>
        <ul>
          <h5>The Palindromes are: </h5>
          {this.state.arrayValue}
        </ul>
      </div>
    );
  }
}

export default App;
