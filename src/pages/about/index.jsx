import React, { Component } from "react";

class About extends Component {
  componentWillMount () {
    console.log(this.props);
  }
  render () {
    return "关于";
  }
}

export default About;