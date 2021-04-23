import React, { Component } from 'react';
import './home.scss';
import Font from 'react-font';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
  state = {
    speed: 10000,
    speedText: 'turn 10000ms linear infinite',
    bkgRed: 238,
    bkgGreen: 235,
    bkgBlue: 221
  }

  handleSpeed = (command) => {
    const num = this.state.speed;
    const steps = num < 1000 ? 100 : 500
    const newSpeed = eval(num.toString() + command + steps);
    const text = `turn ${newSpeed}ms linear infinite`
    if (newSpeed >=100) {
      this.setState({
        speed: newSpeed,
        speedText: text
      })
    }
  }

  handleBackGround = (commandArray) => {
    const steps = 1
    const newValue = eval(this.state[commandArray[0]] + commandArray[1] + steps);
    this.setState({
      [commandArray[0]]: newValue
    })
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
    let cubeStyle = {
      width: '200px',
      height: '200px',
      transformStyle: 'preserve-3d',
      animation: this.state.speedText
    }

    let homeStyle = {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '100vh',
      backgroundColor: `rgb(${this.state.bkgRed}, ${this.state.bkgGreen}, ${this.state.bkgBlue})`
    }


    return (
      <Font family='Actor'>
        <div style={homeStyle}>
          <div className='container'>
            <div style={cubeStyle}>
              <div className='cubeDiv' id='front' onClick={this.handleClick} data-style='translateZ(2000px) rotateZ(360deg)'>Notes</div>
              <div className='cubeDiv' id='back' onClick={this.handleClick} data-style='translateZ(-2000px) rotateY(180deg)  rotateZ(360deg)'>Challenges</div>
              <div className='cubeDiv' id='left' onClick={this.handleClick} data-style='translateX(-2000px) rotateY(-90deg) rotateZ(360deg)'>Books</div>
              <div className='cubeDiv' id='right' onClick={this.handleClick} data-style='translateX(2000px) rotateY(90deg) rotateZ(360deg)'>About</div>
              <div className='cubeDiv' id='up' data-style='translateY(-2000px) rotateX(90deg) rotateZ(360deg)'>Coming soon</div>
              <div className='cubeDiv' id='down' onClick={this.handleClick} data-style='translateY(2000px) rotateX(-90deg) rotateZ(360deg)'>Blogs</div>
            </div>
          </div>
          <div>
            <div className='backgroundButtons'>
              <p>Background</p>
              <div>
                <FontAwesomeIcon
                  onClick={() => {this.handleBackGround(['bkgRed', '+'])}}
                  className='fontAwesome'
                  icon={faArrowAltCircleUp}
                />
                  &nbsp;&nbsp;Red&nbsp;&nbsp;
                <FontAwesomeIcon
                  onClick={() => {this.handleBackGround(['bkgRed', '-'])}}
                  className='fontAwesome'
                  icon={faArrowAltCircleDown}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  onClick={() => {this.handleBackGround(['bkgGreen', '+'])}}
                  className='fontAwesome'
                  icon={faArrowAltCircleUp}
                />
                  &nbsp;&nbsp;Green&nbsp;&nbsp;
                <FontAwesomeIcon
                  onClick={() => {this.handleBackGround(['bkgGreen', '-'])}}
                  className='fontAwesome'
                  icon={faArrowAltCircleDown}
                />
              </div>
              <div>
                <FontAwesomeIcon
                  onClick={() => {this.handleBackGround(['bkgBlue', '+'])}}
                  className='fontAwesome'
                  icon={faArrowAltCircleUp}
                />
                  &nbsp;&nbsp;Blue&nbsp;&nbsp;
                <FontAwesomeIcon
                  onClick={() => {this.handleBackGround(['bkgBlue', '-'])}}
                  className='fontAwesome'
                  icon={faArrowAltCircleDown}
                />
              </div>
            </div>
            <div className='speedButtons'>
              <p>Speed</p>
              <div>
                <FontAwesomeIcon
                  onClick={() => {this.handleSpeed('-')}}
                  className='fontAwesome'
                  icon={faArrowAltCircleUp}
                />
                <FontAwesomeIcon
                  onClick={() => {this.handleSpeed('+')}}
                  className='fontAwesome'
                  icon={faArrowAltCircleDown}
                />
              </div>
            </div>
          </div>
        </div>
      </Font>
    );
  }
}

export default Home;