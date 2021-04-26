import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './index.scss';
import Top from '../../assets/images/top.jpg'

class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='home'>
          <div className='homeTitle'>
            <h1>Leave Your Comfort Zone Step By Step<br/>And You Will Feel Great Every Step You Take</h1>
            <p></p>
          </div>
          <div><img src={Top} className='imageHome' /></div>
        </div>
      </div>
    );
  }
}

export default Index;