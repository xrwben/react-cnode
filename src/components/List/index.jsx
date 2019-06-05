import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

class List extends Component {
  render () {
    return (
      <div className="list-cell">
        <div className="list-left">
          <img src="https://avatars2.githubusercontent.com/u/227713?v=4&s=120" alt=""/>
          <span>42/35181</span>
        </div>
        <div className="list-center title">
          <span>置顶</span>
          <NavLink to="/">Node 12 值得关注的新特性</NavLink>
        </div>
        <div className="list-right">
          <img src="https://avatars2.githubusercontent.com/u/227713?v=4&s=120" alt=""/>
          <span>3 分钟前</span>
        </div>
      </div>
    );
  }
}

export default List;