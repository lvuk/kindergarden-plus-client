import React from 'react';
import '../../stylesheets/parent/activities.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Activities = () => {
  return (
    <div className='activities'>
      <header>
        <h1>Wednesday, 24/09/2024</h1>
        <div className='activities-btn'>
          <button className='btn'>
            <FaChevronLeft />
          </button>
          <button className='btn'>Today</button>
          <button className='btn'>
            <FaChevronRight />
          </button>
        </div>
      </header>
      <div className='activities-body'>
        <div className='timeline'>
          <h2>Timeline</h2>
          <p>
            <strong>08:00</strong> - Arrival
          </p>
          <p>
            <strong>08:30</strong> - Breakfast
          </p>
          <p>
            <strong>09:00</strong> - Morning activities
          </p>
          <p>
            <strong>10:00</strong> - Snack time
          </p>
          <p>
            <strong>10:30</strong> - Outdoor play
          </p>
          <p>
            <strong>12:00</strong> - Lunch
          </p>

          <p>
            <strong>13:00</strong> - Nap time
          </p>
          <p>
            <strong>15:00</strong> - Snack time
          </p>
          <p>
            <strong>15:30</strong> - Afternoon activities
          </p>
          <p>
            <strong>16:00</strong> - Home
          </p>
        </div>
        <div>
          <h2>Detailed Description</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In aliquid
            accusantium sit, magni quae neque, expedita odio explicabo rem fuga
            quia totam nulla sint quisquam animi adipisci mollitia doloribus
            consectetur! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Adipisci laborum quisquam sapiente eaque beatae, fugit
            consequatur explicabo vel voluptatum cupiditate corrupti, soluta
            modi nam sit, architecto aut aliquid incidunt molestiae! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Eum enim unde placeat
            doloremque! Repellendus, officiis ex! Tempora cumque laudantium,
            optio ullam nobis alias, harum voluptate quas consectetur
            accusantium nemo dolorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
