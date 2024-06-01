import './Slider.css';
import React, { useEffect, useState } from 'react';
import leftChevron from '../../assets/left-arrow.svg';
import rightChevron from '../../assets/right-arrow.svg';
import sliderData from '../../data/sliderData';

export default function Slider() {
  const [sliderIndex, setSliderIndex] = useState(1);
  const handleClick = (indexPayload) => {
    setSliderIndex((pre) => {
      if (indexPayload + pre > sliderData.length) {
        return 1;
      } else if (indexPayload + pre < 1) {
        return sliderData.length;
      } else {
        return indexPayload + pre;
      }
    });
  };
  useEffect(() => {
    const intervalID = setInterval(() => handleClick(1), 5000);
    return () => clearInterval(intervalID);
  }, []);
  return (
    <>
      <p className='index-info'>
        {sliderIndex}/{sliderData.length}
      </p>
      <div className='slider'>
        <p className='image-info'>
          {sliderData.find((item) => item.id === sliderIndex).description}
        </p>
        <img
          src={`/images/img-${sliderIndex}.jpg`}
          alt='estate room'
          className='slider-img'
        />
        <button
          className='navigation-button prev-button'
          onClick={() => handleClick(-1)}
        >
          <img src={leftChevron} alt='left-arrow' />
        </button>
        <button
          className='navigation-button next-button'
          onClick={() => handleClick(1)}
        >
          <img src={rightChevron} alt='right-arrow' />
        </button>
      </div>
    </>
  );
}
