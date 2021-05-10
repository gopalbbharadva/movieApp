import React from "react";
import { SketchPicker } from "react-color";
import Dummy from "./Dummy";

class Color extends React.Component {
  state = {
    bg: "",
    flag: false,
  };
  colorHandler = (color) => {
    this.setState({
      bg: color.hex,
    });
  };

  btnHandler = () => {
    if (this.state.bg)
      this.setState({
        flag: true,
      });
  };
  render() {
    return (
      <div style={{ backgroundColor: this.state.bg }}>
        {/* {this.state.bg ? <h1>Color Picker</h1> : null} */}
        <SketchPicker
          color={this.state.bg}
          onChangeComplete={this.colorHandler}
        />
        {console.log(this.state.bg)}
        <button onClick={this.btnHandler}>Submit</button>
        {this.state.flag ? <Dummy /> : null}
      </div>
    );
  }
}

export default Color;
