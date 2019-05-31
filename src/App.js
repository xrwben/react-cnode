import React, { Component } from "react";
import Router from "./router/index.js";
import { NavLink, Link } from "react-router-dom";

import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;


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
  render () {
    return (
      <Layout style={{height:"100vh"}}>
        <Header>
          <div className="logo" style={{color:'#fff' }}>Logo</div>
        </Header>
        <Layout>
          <Sider>
            <Menu theme="dark" mode="inline" defaultOpenKeys={["首页"]} defaultSelectedKeys={["首页"]} selectedKeys={this.state.currentRoute}>
              <SubMenu key="首页" title={
                <span>
                  <Icon type="appstore" />  
                  <span>首页</span>
                </span>
              }>
                <Menu.Item key="全部">全部</Menu.Item>
                <Menu.Item key="精华">精华</Menu.Item>
                <Menu.Item key="分享">分享</Menu.Item>
                <Menu.Item key="问答">问答</Menu.Item>
                <Menu.Item key="招聘">招聘</Menu.Item>
              </SubMenu>
              <Menu.Item key="新手入门"><Icon type="desktop" />新手入门</Menu.Item>
              <Menu.Item key="API">
                <Link to="/about"><Icon type="pie-chart" />API</Link>
              </Menu.Item>
              <Menu.Item key="关于"><Icon type="apartment" />关于</Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Router></Router>
            {/* <Footer>Footer</Footer> */}
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App;
