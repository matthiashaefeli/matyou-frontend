import React from 'react';
import './home.css';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const handleClick = () => history.push('/notes');

  return (
    <div className='container'>
    <div className='cube'>
      <div className='side front' onClick={handleClick}>Notes</div>
      <div className='side back'>Challenges</div>
      <div className='side left'>Books</div>
      <div className='side right'>About</div>
      <div className='side up'>Blog</div>
      <div className='side down'>Coming soon</div>
    </div>
  </div>
  );
};

export default Home;