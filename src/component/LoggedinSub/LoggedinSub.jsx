import { Component } from "react";

class loggedinSub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      subscription: "Guest",
    };
  }

  handlesup = () => {
    this.setState({
      isLoggedIn: true,
      subscription: "You Know have a subscribtion",
    });
  };
  
  render() {
    return (
      <div>
        <h1>Logging:{this.state.isLoggedIn}</h1>
        <h1>{this.state.subscription}</h1>
        <button onClick={this.handlesup}>Click Here</button>
      </div>
    );
  }
}

export default loggedinSub;
