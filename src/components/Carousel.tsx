import React from 'react';
import './Carousel.scss';

const Carousel: React.FC = () => (
  <div className="Carousel">
    <button type="button">Prev</button>
    <ul className="Carousel__list">
      <li className="Carousel__item">
        <img src="./img/1.png" alt="1" />
      </li>
      <li>
        <img src="./img/1.png" alt="2" />
      </li>
      <li>
        <img src="./img/1.png" alt="3" />
      </li>
      <li>
        <img src="./img/1.png" alt="4" />
      </li>
    </ul>

    <button data-cy="next" type="button">
      Next
    </button>
  </div>
);

export default Carousel;
