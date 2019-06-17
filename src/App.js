import React, { Component } from "react";
import Router from "./router/index.js";
import { withRouter, Link } from "react-router-dom";
import "./App.scss";

import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;



class App extends Component {
  constructor () {
    super()
    this.state = {
      currentRoute: ["全部"]
    }
  }
  componentWillMount () {
    console.log(this.props)
  }
  onSelectMenu ({item, key, keyPath, selectedKeys, domEvent}) {
    // console.log(item, key, keyPath, selectedKeys, domEvent);
    this.setState({
      currentRoute: selectedKeys
    })
  }
  render () {
    return (
      <Layout style={{height:"100vh"}}>
        <Header>
          <div className="logo">
            <img src={require("./static/logo.png")} alt=""/>
          </div>
        </Header>
        <Layout>
          <Sider>
            <Menu theme="dark" mode="inline" 
              defaultOpenKeys={["首页"]} 
              defaultSelectedKeys={["首页"]} 
              selectedKeys={this.state.currentRoute}
              onSelect={this.onSelectMenu.bind(this)}
            >
              <SubMenu key="首页" title={
                <span>
                  <Icon type="appstore" />
                  <span>首页</span>
                </span>
              }>
                <Menu.Item key="全部"><Link to="/home">全部</Link></Menu.Item>
                <Menu.Item key="精华"><Link to="/home?tab=good">精华</Link></Menu.Item>
                <Menu.Item key="分享"><Link to="/home?tab=share">分享</Link></Menu.Item>
                <Menu.Item key="问答"><Link to="/home?tab=ask">问答</Link></Menu.Item>
                <Menu.Item key="招聘"><Link to="/home?tab=job">招聘</Link></Menu.Item>
                <Menu.Item key="客户端测试"><Link to="/home?tab=dev">客户端测试</Link></Menu.Item>
              </SubMenu>
              <Menu.Item key="新手入门">
                <Link to="/getstart"><Icon type="desktop" />新手入门</Link>
              </Menu.Item>
              <Menu.Item key="API">
                <Link to="/api"><Icon type="pie-chart" />API</Link>
              </Menu.Item>
              <Menu.Item key="关于">
                <Link to="/api"><Icon type="apartment" />关于</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Router></Router>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default withRouter(App);
