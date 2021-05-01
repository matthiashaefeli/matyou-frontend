import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './index.scss';

class Index extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='home'>
          <div className='outerPictureFrame'>
            <div className='outerPictureFramein'>
              <div className='innerPictureFrame'>
                <p className='pictureText'>Leave Your Comfort Zone Step By Step And You Will Feel Great Every Step You Take</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Index;