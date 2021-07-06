import React, { Component } from "react";
import TopBar from "../components/TopBar";
import BottomBar from "../components/BottomBar";

export default class Layout extends Component {
  componentDidMount() {
    const { title = "商城" } = this.props;
    document.title = title;
  }
  render() {
    console.log(this.props);
    const { children, showTopBar, showBottomBar } = this.props;
    return (
      <div>
        {showTopBar ? <TopBar /> : null}
        {children.content}
        {children.txt}
        <button onClick={children.btnClick}>buttom</button>
        {showBottomBar ? <BottomBar /> : null}
      </div>
    );
  }
}
