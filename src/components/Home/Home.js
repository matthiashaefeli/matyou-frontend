import React from 'react';
import './home.css';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const handleClick = (route) => history.push(`/${route}`);

  return (
    <div className='container'>
    <div className='cube'>
      <div className='side front' onClick={() => handleClick('notes')}>Notes</div>
      <div className='side back' onClick={() => handleClick('challenges')}>Challenges</div>
      <div className='side left' onClick={() => handleClick('books')}>Books</div>
      <div className='side right' onClick={() => handleClick('about')}>About</div>
      <div className='side up'>Coming soon</div>
      <div className='side down' onClick={() => handleClick('blogs')}>Blog</div>
    </div>
  </div>
  );
};

export default Home;