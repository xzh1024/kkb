import React, { Component } from "react";
// import PropTypes from "prop-types"

export default class LifeCyclePage extends Component {
  static defaultProps = {
    // msg: "omg"
  };

  static propTypes = {
    // msg: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextState);
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    console.log("render", this.props);
    const { count } = this.state;
    return (
      <div>
        <h3>LifeCyclePage</h3>
        <div>{ count }</div>
        <button onClick={this.setCount}>ADD</button>

        { count % 2 && <Child count={count} /> }
      </div>
    );
  }
}


class Child extends Component {
  // 初次渲染的时候不会执行，只有在已挂载的组件接收新的props的时候，才会执行
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  render() {
    console.log("Child render");
    const { count } = this.props;
    return (
      <div>
        <h3>Child</h3>
        <p>{count}</p>
      </div>
    )
  }
}
