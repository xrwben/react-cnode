import React, { Component } from "react";
import { Pagination } from 'antd';
import List from "../../components/List/index.jsx";
import "./style.scss";

class Home extends Component {
  constructor () {
    super();
    this.state = {
      topicList: [],
      pageSize: 20,
      pageNum: 1,
      totalSize: 1000
    }
  }
  // 获取列表数据
  getList = () => {
    
  }
  // 更改当前页
  onChangeNum = (page, pageSize) => {
    console.log(page, pageSize);
    this.setState({
      pageNum: page
    })
  }
  render () {
    return (
      <div className="home">
        {[1].map(item => {
          return (<List key={item}></List>)
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