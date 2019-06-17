import React, { Component } from "react";
import { Pagination } from 'antd';
import List from "../../components/List/index.jsx";
import api from "../../api/index.js";
import "./style.scss";

class Home extends Component {
  constructor () {
    super();
    this.state = {
      topicList: [],
      pageSize: 40,
      pageNum: 1,
      totalSize: 2400
    }
  }
  componentWillMount () {
    this.getList();
  }
  // 获取列表数据
  getList = () => {
    // console.log(this.state);
    api.getTipcs(
      this.state.pageNum,
      this.state.pageSize,
      "share"
    ).then(res => {
      // console.log("+++", res);
      if (res.data.success) {
        this.setState({
          topicList: res.data.data
        })
      }
    })
  }
  // 更改当前页
  onChangeNum = (page, pageSize) => {
    console.log(page, pageSize);
    this.setState({
      pageNum: page
    }, () => {
      // console.log(this.state);
      this.getList();
    });
    // window.scrollTo(0, 0);
  }
  render () {
    return (
      <div className="home">
        {this.state.topicList.map(item => {
          return (<List key={item.id} topic={item}></List>)
        })}
        <Pagination
          className="pagination" 
          size="small"
          current={this.state.pageNum}
          pageSize={this.state.pageSize}
          total={this.state.totalSize}
          onChange={this.onChangeNum}>
        </Pagination>
      </div>
    );
  }
}

export default Home;