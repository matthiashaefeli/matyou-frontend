import React, { Component } from 'react';
import './home.scss';
import StyleFour from '../StyleFour/Index';
// import StyleTwo from '../StyleTwo/Index';
// import StyleOne from '../StyleOne/Index';
// import StyleThree from '../StyleThree/Index';

class Home extends Component {
  render() {
    // const renderStyle = () => {
    //   const array = [<StyleOne history={this.props.history} />,
    //                  <StyleTwo history={this.props.history} />,
    //                  <StyleThree history={this.props.history} />
    //                  <StyleFour history={this.props.history} />
    //                 ]

    //   return array[Math.floor(Math.random() * array.length)]
    // }
    return (
      <div className='homeContainer'>
        {/* {renderStyle()} */}
        <StyleFour history={this.props.history} />
      </div>
    );
  }
}

export default Home;
