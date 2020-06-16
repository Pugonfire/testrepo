class FontChooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidden: true, bold: true, size: 16 };
  }

  toggle() {
    this.setState({ hidden: !this.state.hidden });
  }
  render() {
    var hide = this.state.hidden ? "true" : "";
    var myColor = this.state.hidden ? "green" : "red";
    var bold = this.state.bold ? "" : "bold";
    var size = this.state.size;
    return (
      <div>
        <input
          type="checkbox"
          id="boldCheckbox"
          onClick={this.onCheckedBold.bind(this)}
          hidden={hide}
        />
        <button
          id="decreaseButton"
          onClick={this.onClickLower.bind(this)}
          hidden={hide}
        >
          -
        </button>
        <span id="fontSizeSpan" hidden={hide}>
          {size}
        </span>
        <button
          id="increaseButton"
          onClick={this.onClickIncrease.bind(this)}
          hidden={hide}
        >
          +
        </button>
        <span
          id="textSpan"
          onClick={this.toggle.bind(this)}
          style={{
            color: myColor,
            fontWeight: bold,
            fontSize: size,
          }}
        >
          {this.props.text}
        </span>
      </div>
    );
  }

  onCheckedBold() {
    this.setState({ bold: !this.state.bold });
  }

  onClickLower() {
    if (this.state.size > this.props.min) {
      this.setState({ size: this.state.size - 1 });
    } else {
    }
  }

  onClickIncrease() {
    if (this.state.size < this.props.max) {
      this.setState({ size: this.state.size + 1 });
    } else {
    }
  }
}
