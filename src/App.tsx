import React from "react";
import { Layout, Menu } from "antd";
import Dashboard from "../src/Pages/Dashboard";
import RunTask from "../src/Pages/RunTask";

const { Header, Content } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Dashboard</Menu.Item>
          <Menu.Item key="2">Run Task</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Dashboard />
        <RunTask />
      </Content>
    </Layout>
  );
}

export default App;
