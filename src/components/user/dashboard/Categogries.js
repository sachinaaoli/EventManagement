import React, { useState } from 'react';
import './Categogries.css'; 

const Categories = ({ onSelectCategory }) => {
  const categories = ['All', 'Wedding', 'Birthday', 'Anniversary', 'Conference'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <div>      <h1 style={{  padding:'0px' ,color:'#ef4444', fontFamily:'Courier New, Monospace',  fontStyle:'normal', 
    fontSize: '2rem', fontWeight: 'bold', textAlign: 'Center',  }}> Event Categories</h1>
    <div className="event-categories">
      {categories.map(category => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => handleCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
    </div>
  );
};

export default Categories;
