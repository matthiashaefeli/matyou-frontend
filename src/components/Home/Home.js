import React, { Component } from 'react';
import StyleTwo from '../StyleTwo/Index';
// import StyleOne from '../StyleOne/Index';
// import StyleThree from '../StyleThree/Index';

class Home extends Component {
  render() {
    // const renderStyle = () => {
    //   const array = [<StyleOne history={this.props.history} />,
    //                  <StyleTwo history={this.props.history} />,
    //                  <StyleThree history={this.props.history} />
    //                 ]

    //   return array[Math.floor(Math.random() * array.length)]
    // }
    return (
      <div>
        {/* {renderStyle()} */}
        <StyleTwo history={this.props.history} />
      </div>
    );
  }
}

export default Home;
