import React, {Component} from 'react';
import Header from './base/Header';
import Footer from './base/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    );
  }
}

export default App;
