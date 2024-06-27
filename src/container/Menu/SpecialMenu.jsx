import React, { useRef, useEffect } from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const vidRef = useRef();

  useEffect(() => {
    const handleVideoPlay = () => {
      if (vidRef.current.paused) {
        vidRef.current.play();
      }
    };

    vidRef.current.play();
    vidRef.current.addEventListener('pause', handleVideoPlay);

    return () => {
      vidRef.current.removeEventListener('pause', handleVideoPlay);
    };
  }, []);

  return (
    <div className='app__specialMenu flex__center section__padding' id='menu'>
      <div className="app__specialMenu">
        <SubHeading title="Menu that fits you" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine">
          <p className='app__specialMenu-menu_heading'>Wine & Beer</p>
          <div className="app__specialMenu-menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <video ref={vidRef} src={images.menu} autoPlay loop  style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="app__specialMenu-menu_cocktails">
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: '15px' }}>
        <button className="custom__button" type='button'>View More</button>
      </div>
    </div>
  );
};

export default SpecialMenu;
