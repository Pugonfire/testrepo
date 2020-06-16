class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

class Multiplier extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input1: 0, input2: 0, product: 0 };
    // defining this.state.etc
    this.multiply = this.multiply.bind(this);
    // setting multiply property to it's own muliply func.
  }

  multiply(id, val) {
    if (id == 1) {
      this.setState({ input1: val, product: val * this.state.input2 });
    } else if (id == 2) {
      this.setState({ input2: val, product: val * this.state.input1 });
    }
  }

  render() {
    return (
      <div>
        <NumberInputField id="1" action={this.multiply} />
        //inputting properties into the classes
        <NumberInputField id="2" action={this.multiply} />
        // this.multiply property = func. multiply
        <OutputField product={this.state.product} />
      </div>
    );
  }
}

class NumberInputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // Setting handleChange property to handleChange func.
  }
  handleChange(e) {
    this.props.action(this.props.id, e.target.value);
    //.action as defined when rendering NumberInputField
    //.action = {this.multiply} = the multiply func. in Class Multiplier
  }
  render() {
    return <input onChange={this.handleChange}></input>;
    // calling property handleChange which is what handleChange(e) function returns
  }
}

class OutputField extends React.Component {
  render() {
    return <div>The product is {this.props.product}</div>;
    // props.product as defined when rendering OutputField
  }
}
