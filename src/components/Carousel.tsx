import React, { useState } from 'react';
import './Carousel.scss';

import { State } from '../Types/State';

const Carousel: React.FC<State> = ({
  images,
  itemWidth,
  frameSize,
  step,
  animationDuration,
  infinite,
}) => {
  const [shift, setShift] = useState<number>(0);

  const moveNext = () => {
    if (infinite) {
    }

    setShift(prev => prev - step * itemWidth);
  };

  const movePrev = () => {
    setShift(prev => prev + step * itemWidth);
  };

  return (
    <div className="Carousel">
      <button onClick={movePrev} type="button">
        Prev
      </button>
      <div
        className="Carousel__container"
        style={{ width: itemWidth * frameSize }}
      >
        <ul
          className="Carousel__list"
          style={{
            transform: `translateX(${shift}px)`,
            transition: `translateX, ${animationDuration}ms ease-in-out`,
          }}
        >
          {images.map((image: string, index: number) => (
            <li key={index} className="Carousel__item">
              <img
                style={{ width: itemWidth }}
                src={image}
                alt={String(index)}
              />
            </li>
          ))}
        </ul>
      </div>

      <button onClick={moveNext} data-cy="next" type="button">
        Next
      </button>
    </div>
  );
};

export default Carousel;
