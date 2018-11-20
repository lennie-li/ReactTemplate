import React,{Component} from 'react';


class Detail extends Component{
  render(){
    return (
      <div>
        <div>Detail</div>
        <button onClick={() => {this.props.history.push('Home')}}>To Home</button>
      </div>
    );
  }
}
export default Detail;