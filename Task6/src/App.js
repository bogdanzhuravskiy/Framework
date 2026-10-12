import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people] = useState(data);
  const [index, setIndex] = useState(1);

  const prevSlide = () => {
    setIndex(index === 0 ? people.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === people.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex(index === 0 ? people.length - 1 : index - 1);
    }, 2000);
    return () => clearInterval(slider);
  }, [index, people.length]);

  return (
    <section className='section'>
      <div className='title'>
        <h2><span>/</span>reviews</h2>
      </div>
      <div className='section-center'>
        {people.map(({ id, image, name, title, quote }, personIndex) => {
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (
            personIndex === index - 1 ||
            (personIndex === people.length - 1 && index === 0)
          ) {
            position = 'lastSlide';
          }

          return (
            <article className={position} key={id} aria-hidden={personIndex !== index}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={prevSlide} aria-label='Previous slide'>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextSlide} aria-label='Next slide'>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
