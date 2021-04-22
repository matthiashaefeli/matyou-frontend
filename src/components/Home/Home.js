import React, { Component } from 'react';
import './home.scss';
import Font from 'react-font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  state = {
    speed: 10000,
    speedText: 'turn 10000ms linear infinite'
  }

  handleSpeed = (command) => {
    const num = this.state.speed;
    const steps = num < 1000 ? 100 : 500
    const new_speed = eval(num.toString() + command + steps);
    const text = `turn ${new_speed}ms linear infinite`
    if (new_speed >=100) {
      this.setState({
        speed: new_speed,
        speedText: text
      })
    }
  }

  handleClick = (event) => {
    const route = event.target.innerText.toLowerCase()
    const id = event.target.id
    let ids = ['front', 'back', 'left', 'right', 'up', 'down']
    let filteredIds = ids.filter(function(el) {return el !== id})

    filteredIds.forEach(element => {
      let el = document.getElementById(element)
      el.style.transform = el.dataset.style
    })

    setTimeout(() => {
      filteredIds.forEach(element => {
        let el = document.getElementById(element)
        el.remove()
      })

      document.getElementById(id).style.transform = 'scale(5)'
    }, 1000);

    setTimeout(() => { this.props.history.push(`/${route}`) }, 1500)
  };

  render() {
    let sectionStyle = {
      width: '200px',
      height: '200px',
      transformStyle: 'preserve-3d',
      animation: this.state.speedText
    }


    return (
      <Font family='Actor'>
        <div className='home'>
          <div className='container'>
            <div style={sectionStyle}>
              <div className='cubeDiv' id='front' onClick={this.handleClick} data-style='translateZ(2000px) rotateZ(360deg)'>Notes</div>
              <div className='cubeDiv' id='back' onClick={this.handleClick} data-style='translateZ(-2000px) rotateY(180deg)  rotateZ(360deg)'>Challenges</div>
              <div className='cubeDiv' id='left' onClick={this.handleClick} data-style='translateX(-2000px) rotateY(-90deg) rotateZ(360deg)'>Books</div>
              <div className='cubeDiv' id='right' onClick={this.handleClick} data-style='translateX(2000px) rotateY(90deg) rotateZ(360deg)'>About</div>
              <div className='cubeDiv' id='up' data-style='translateY(-2000px) rotateX(90deg) rotateZ(360deg)'>Coming soon</div>
              <div className='cubeDiv' id='down' onClick={this.handleClick} data-style='translateY(2000px) rotateX(-90deg) rotateZ(360deg)'>Blogs</div>
            </div>
          </div>
          <div className='speedButtons'>
            <FontAwesomeIcon
              onClick={() => {this.handleSpeed('-')}}
              className='fontAwesome'
              icon={faArrowAltCircleUp}
            />
              &nbsp;&nbsp;Speed&nbsp;&nbsp;
            <FontAwesomeIcon
              onClick={() => {this.handleSpeed('+')}}
              className='fontAwesome'
              icon={faArrowAltCircleDown}
            />
          </div>
        </div>
      </Font>
    );
  }
}

export default Home;