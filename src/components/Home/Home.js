import React from 'react';
import './home.scss';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();

  const handleClick = (event) => {
    console.log(event.target.className)
    console.log(event.target.dataset.val)
    document.getElementsByClassName('front')[0].style.transform = 'translateZ(2000px) rotateZ(360deg)'
    document.getElementsByClassName('back')[0].style.transform = 'translateZ(-2000px) rotateY(180deg)  rotateZ(360deg)'
    document.getElementsByClassName('left')[0].style.transform = 'translateX(-2000px) rotateY(-90deg) rotateZ(360deg)'
    document.getElementsByClassName('right')[0].style.transform = 'translateX(2000px) rotateY(90deg) rotateZ(360deg)'
    document.getElementsByClassName('up')[0].style.transform = 'translateY(-2000px) rotateX(90deg) rotateZ(360deg)'
    document.getElementsByClassName('down')[0].style.transform = 'translateY(2000px) rotateX(-90deg) rotateZ(360deg)'
    const route = event.target.innerText.toLowerCase()
    setTimeout(() => {  history.push(`/${route}`) }, 1000);
  };

  return (
    <div className='container'>
    <div className='cube'>
      <div className='front' onClick={handleClick}>Notes</div>
      <div className='back' onClick={handleClick}>Challenges</div>
      <div className='left' onClick={handleClick}>Books</div>
      <div className='right' onClick={handleClick}>About</div>
      <div className='up'>Coming soon</div>
      <div className='down' onClick={handleClick}>Blogs</div>
    </div>
  </div>
  );
};

export default Home;