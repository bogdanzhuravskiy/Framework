import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevCard = () => {
    setIndex(index === 0 ? people.length - 1 : index - 1);
  };

  const nextCard = () => {
    setIndex(index === people.length - 1 ? 0 : index + 1);
  };

  const randomCard = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = (index + 1) % people.length;
    }
    setIndex(randomIndex);
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button onClick={prevCard} className='prev-btn' aria-label='Previous review'>
          <FaChevronLeft />
        </button>
        <button onClick={nextCard} className='next-btn' aria-label='Next review'>
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomCard} className='random-btn'>
        Surprise me
      </button>
    </article>
  );
};

export default Review;
