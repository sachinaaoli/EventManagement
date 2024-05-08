import React, { useState } from 'react';
import Categogries from './Categogries';
import eventdata from '../../utiles/eventdata';

const Component = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    // You can perform any actions based on the selected category here
  };

 

  // Filter events based on selected category
  const filteredEvents = selectedCategory === 'All' ? eventdata : eventdata.filter(event => event.category === selectedCategory);

  return (
    <div>
      <Categogries onSelectCategory={handleCategorySelect} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {/* Display events based on the selected category */}
        {filteredEvents.map(event => (
          <div key={event.id} style={{ width: '300px', marginBottom: '30px', marginRight: '20px', marginLeft:'25px', margin:'0 auto' }}>
            <img src={event.image} alt={event.title}  style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <h3>{event.title}</h3>
            <p>{event.theme}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
