import React,{Component} from 'react';
import Button from '../components/Button';


class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
        url:'123'
    };
  }
  render(){
    console.log(this.props);
    return (
      <div>
        <div>Home</div>
        <Button url={'Detail'} text={'ToDetail'}/>
      </div>
    );
  }
}
export default Home;