import React, {Component} from 'react';
import logo from '../static/img/首页.png';
import styles from '../static/css/header.module.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <div>
          <img src={logo} alt=""/>
        </div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </header>
    );
  }
}

export default Header;