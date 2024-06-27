import React from 'react';
import { images } from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding ' id='about'>
    <div className="app__aboutus-overlay flex__center"><img src={images.G} alt="G" /></div>
    <div className="app__aboutus-content flex__center"><div className="app__aboutus-content_about flex-right"><h1 className="headtext__cormorant">About Us</h1>
      <img src={images.spoon} alt='spoon' className='spoon__img' />
      <p className='p__opensans' style={{ margin: '2rem 0' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptate autem. Suscipit quidem ex illum maiores voluptates iste numquam enim.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptate autem. Suscipit quidem ex illum maiores voluptates iste numquam enim.
      </p>
      <button className="custom__button">Know More</button>
    </div>
      <div className="app__aboutus-content_knife flex__center"><img src={images.knife} alt="knife" /></div>
      <div className="app__aboutus-content flex__center"><div className="app__aboutus-content_history"><h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt='spoon' className='spoon__img' />
        <p className='p__opensans' style={{ margin: '2rem 0' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptate autem. Suscipit quidem ex illum maiores voluptates iste numquam enim.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, voluptate autem. Suscipit quidem ex illum maiores voluptates iste numquam enim.
        </p>
        <button className="custom__button">Know More</button>
      </div>
      </div>
    </div>
  </div>
);

export default AboutUs;
