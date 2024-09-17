import '../stylesheets/components/resource-card.scss';
import defaultImg from '../assets/math.png';

import React from 'react';

const ResourceCard = () => {
  const data = {
    title: 'Resource Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente odio exercitationem dignissimos suscipit maxime vel optio architecto ab. Voluptatem non explicabo ad quos ab minima eaque laudantium nemo quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente odio exercitationem dignissimos suscipit maxime vel optio architecto ab. Voluptatem non explicabo ad quos ab minima eaque laudantium nemo qua Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum sapiente odio exercitationem dignissimos suscipit maxime vel optio architecto ab. Voluptatem non explicabo ad quos ab minima eaque laudantium nemo qua',
    link: 'Resource Link',
    createdAt: '2024-08-21',
  };

  return (
    <div className='resource-cards-container'>
      <div className='grid-container'>
        {/* Rendering 6 items to fit in 3x2 grid */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className='grid-item'>
            <div className='card'>
              <img src={defaultImg} alt='' className='image' />
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <button className='btn'>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceCard;
