import React, { Component } from "react";
// import TopBar from '../components/TopBar';
// import BottomBar from '../components/BottomBar';
import Layout from "./Layout";

export default class HomePage extends Component {
  render() {
    return (
      <Layout showBar={false} showBottomBar={true} title="商城首页">
        {/*
          <div>
          <h3>HomePage</h3>
        </div>
          */}
        {{
          content: (
            <div>
              <h3>HomePage</h3>
            </div>
          ),
          txt: "这是个文本",
          btnClick: () => {
            console.log("btnClick");
          }
        }}
      </Layout>
    );
  }
}
