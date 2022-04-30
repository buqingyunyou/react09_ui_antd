import "./App.css";
import React from "react";
import { Button, Tooltip } from "antd";
import { SearchOutlined, PoweroffOutlined } from "@ant-design/icons";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary">主按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="text">文本按钮</Button>
        <Button type="link">链接按钮</Button>
        <br />
        <br />
        <Button type="primary" icon={<SearchOutlined />}>
          主按钮
        </Button>
        &nbsp;
        <Button
          type="primary"
          shape="circle"
          icon={<SearchOutlined />}></Button>
        &nbsp;
        <Tooltip title="search">
          <Button type="primary">search</Button>
        </Tooltip>
        &nbsp;
        <Tooltip title="search">
          <Button icon={<SearchOutlined />}>Search</Button>
        </Tooltip>
        &nbsp;
        <Button type="primary" icon={<PoweroffOutlined />}>
          Click
        </Button>
      </div>
    );
  }
}
