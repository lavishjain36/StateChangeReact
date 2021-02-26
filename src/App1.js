import React, { Component } from "react";
class App1 extends Component {
  constructor(props) {
    super(props);
    //set initial state
    this.state = { msg: "Lavish Jain" };

    //Binding this keyword
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ msg: "Welcome to Our Page" });
  }

  render() {
    return (
      <div>
        <h2>Message:</h2>
        <p>{this.state.msg}</p>
        {/* Set click handler */}
        <button onClick={this.handleClick}>Click Here</button>
      </div>
    );
  }
}

export default App1;
