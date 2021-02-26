import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    //initialize count state
    this.state = { count: 0 };
    //bind this
    this.handleClick = this.handleClick.bind(this);
  }

  //function to run after click
  handleClick() {
    //change state using callback
    this.setState((st) => {
      //count is incremented +1 time
      //based on its previous value
      return (st.count += 1);
    });
  }

  render() {
    return (
      <div>
        <h3>Number:{this.state.count}</h3>
        <button onClick={this.handleClick}>Increment count</button>
      </div>
    );
  }
}

export default App;
