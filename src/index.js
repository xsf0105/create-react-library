import React from "react";
import { render } from "react-dom";
import { MyButton } from "./lib";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "React ->",
      type: "default"
    };
  }
  handleClick = () => {
    this.setState({
      text: "This Button can be published to",
      type: "primary"
    });
  };
  render() {
    return (
      <div>
        <p>This is a example component:</p>
        <MyButton
          type={this.state.type}
          text={this.state.text}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
