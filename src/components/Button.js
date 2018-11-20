import React, {Component} from 'react';


class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:'123',
      text:'123'
    }
  }
  handleClick(){
    console.log(this.props);
    this.props.history.push(this.state.url);
  }
  componentDidMount(){
    console.log(this.props);

  }
  render() {
    return (
      <div>
        <button>{this.state.text}</button>
      </div>
    );
  }
}

export default Button;