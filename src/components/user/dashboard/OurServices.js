// import React from 'react';
import { Product } from '../../utiles/Product';
import { Button } from 'antd';
import './OurSevices.css'; 

const OurServices = () => {
    
    const listItems = Product.map((item) => (
        <div className="card" key={item.id}>
            <div className="card_content">
                <div className="card_image">
                    <img src={item.image} alt={item.title} />
                </div>
                <div className="card_info">
                    <div className="card_header">
                        <h2>{item.title}</h2>
                    </div>
                    <p>{item.description}</p>
                    <div >
                 <Button style={{ backgroundColor:'black', color:'white'}}>
                 <a href="BookAConsult"> 

BOOK NOW </a></Button>  


                    </div>
                </div>
            </div>
        </div>
    ));
    return <div className="main_content">  
      <h1 style={{color:'#ef4444', fontFamily:'Courier New, Monospace',  fontStyle:'normal', marginTop:'3rem'
,    fontSize: '2rem', fontWeight: 'bold', textAlign: 'left',  textTransform: 'capitalize', marginBottom: '1rem'}}>OurServices</h1>
    {listItems}</div>;
};

export default OurServices;
