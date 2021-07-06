import React, { Component } from "react";
import store from "../store";

export default class ReduxPage extends Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log("store发生变化了！");
      this.forceUpdate();
    });
  }
  render() {
    console.log(store);
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{store.getState()}</p>
        <button onClick={() => store.dispatch({ type: "ADD" })}>add</button>
      </div>
    );
  }
}
