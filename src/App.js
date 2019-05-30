import React, { Component } from "react";
import Router from "./router/index.js"

import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {
  render () {
    return (
      <Layout>
        <Header>
          <div className="logo"></div>
        </Header>
        <Layout>
          <Sider>
            <Menu theme={"dark"} mode="inline">
              <SubMenu key="sub3" title="首页">
                <Menu.Item key="7">全部</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
                <Menu.Item key="9">Option 7</Menu.Item>
                <Menu.Item key="10">Option 8</Menu.Item>
                <Menu.Item key="11">Option 7</Menu.Item>
              </SubMenu>
              <Menu.Item key="1"><Icon type="desktop" />Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <Footer>Footer</Footer>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App;
