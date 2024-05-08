import React, { useState } from 'react';
import eventdata from '../../utiles/eventdata';
import Product from '../../utiles/Product';
import Modal from './Modal'; 
const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };
  return (
    <div style={{ backgroundColor:'#fefce8'}}>
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', backgroundColor:'#fefce8'}}>
      <div style={{ background: '#ffedd5', padding: '20px', marginBottom: '20px' }}>
        <h1 style={{ color: '#ef4444', fontFamily: 'Courier New, Monospace', fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', textTransform: 'capitalize', margin: '0' }}>
           Portfolio
        </h1>
      </div>
      <div style={{ padding: '0 20px', backgroundColor: '#ffedd5'}}>
        <h2 style={{ color: '#ef4444', fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', marginBottom: '1rem' }}>Experience</h2>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Embark on a journey of seamless perfection with our event management team. Our experience is not just measured in years but in the countless moments we've orchestrated flawlessly. From intimate gatherings to grand galas, we've curated events that linger in memories long after the lights dim. With meticulous attention to detail and a passion for exceeding expectations, we transform visions into realities. Our portfolio speaks volumes, showcasing a diverse array of events where every element was thoughtfully curated, every challenge seamlessly overcome, and every guest left with an unforgettable experience. Let us weave magic into your next event, ensuring it unfolds with elegance, efficiency, and unparalleled excellence.
        </p>
        
        <h2 style={{ color: '#ef4444', fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '3rem' }}>Skills</h2>
        <ul style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.6' }}>
          <li>Event Planning and Coordination</li>
          <li>Vendor Management</li>
          <li>Budgeting and Financial Management</li>
          <li>Logistics and Operations</li>
          <li>Client Relationship Management</li>
        </ul>
        
        <h2 style={{ color: '#ef4444', fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '3rem' }}>Projects</h2>
        <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.1rem', lineHeight: '1.6' }}>
  <strong>Conference (2023)</strong> - Assisted in organizing a large-scale industry conference, overseeing logistics and coordinating with speakers and sponsors. Played a key role in attendee registration and satisfaction.
  <br />
  <strong>Grand Wedding (2023)</strong> - Orchestrated the seamless planning and execution of a grand wedding celebration, attended by hundreds of guests. Collaborated closely with vendors, managed the budget effectively, and ensured every aspect of the event was flawlessly executed.
  </p>
        <h2 style={{ color: '#ef4444', fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '3rem' }}>Gallery</h2>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
     
      {selectedImage && <Modal imageSrc={selectedImage} handleClose={handleCloseModal} />}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {eventdata.map(event => (
          <div key={event.id} style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
            <img 
              src={event.image} 
              alt={event.title} 
              style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0', cursor: 'pointer' }} 
              onClick={() => handleImageClick(event.image)} // Call handleImageClick function on image click
            />
            <div style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '0 0 8px 8px' }}>
              <p style={{ margin: '0', fontWeight: 'bold' }}>{event.title}</p>
              <p style={{ margin: '0', fontSize: '0.9rem' }}>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ color: '#ef4444', fontFamily: 'Arial, sans-serif', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '3rem' }}>More</h2>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
     
     {selectedImage && <Modal imageSrc={selectedImage} handleClose={handleCloseModal} />}
     <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
       {Product.map(Product => (
         <div key={Product.id} style={{ width: 'calc(33.33% - 20px)', marginBottom: '20px', overflow: 'hidden', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
           <img 
             src={Product.image} 
             alt={Product.title} 
             style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0', cursor: 'pointer' }} 
             onClick={() => handleImageClick(Product.image)} // Call handleImageClick function on image click
           />
           <div style={{ padding: '10px', backgroundColor: '#fff', borderRadius: '0 0 8px 8px' }}>
             <p style={{ margin: '0', fontSize: '0.9rem' }}>{Product.title}</p>
           </div>
         </div>
       ))}
     </div>
   </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
