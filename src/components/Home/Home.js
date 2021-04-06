import React from 'react';
import './home.scss';
import { useHistory } from 'react-router-dom';
import Font, { Text } from 'react-font'

const Home = () => {
  const history = useHistory();

  const handleClick = (event) => {
    const route = event.target.innerText.toLowerCase()
    const id = event.target.id
    let ids = ['front', 'back', 'left', 'right', 'up', 'down']
    let filteredIds = ids.filter(function(el) {return el != id})

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

    setTimeout(() => {  history.push(`/${route}`) }, 1500);
  };

  return (
      <Font family='Actor'>
        <div className='container'>
          <div className='cube cubeAnimation'>
            <div id='front' onClick={handleClick} data-style='translateZ(2000px) rotateZ(360deg)'>Notes</div>
            <div id='back' onClick={handleClick} data-style='translateZ(-2000px) rotateY(180deg)  rotateZ(360deg)'>Challenges</div>
            <div id='left' onClick={handleClick} data-style='translateX(-2000px) rotateY(-90deg) rotateZ(360deg)'>Books</div>
            <div id='right' onClick={handleClick} data-style='translateX(2000px) rotateY(90deg) rotateZ(360deg)'>About</div>
            <div id='up' data-style='translateY(-2000px) rotateX(90deg) rotateZ(360deg)'>Coming soon</div>
            <div id='down' onClick={handleClick} data-style='translateY(2000px) rotateX(-90deg) rotateZ(360deg)'>Blogs</div>
          </div>
        </div>
      </Font>
  );
};

export default Home;