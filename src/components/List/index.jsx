import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

class List extends Component {
  render () {
    return (
      <div className="list-cell">
        <div className="list-left">
          <img src={this.props.topic.author.avatar_url} title={this.props.topic.author.loginname} alt=""/>
          <span>{this.props.topic.reply_count}/{this.props.topic.visit_count}</span>
        </div>
        <div className="list-center title">
          {this.props.topic.top?<span>置顶</span>:null}
          <NavLink to="/">{this.props.topic.title}</NavLink>
        </div>
        <div className="list-right">
          <img src={this.props.topic.author.avatar_url} title={this.props.topic.author.loginname} alt=""/>
          <span>{this.props.topic.last_reply_at}</span>
        </div>
      </div>
    );
  }
}

export default List;