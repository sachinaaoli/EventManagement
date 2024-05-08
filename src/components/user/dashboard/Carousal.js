import { Carousel } from 'antd';
import React from 'react';
import { Item } from '../../utiles/Payment';

const Carousal = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 80,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
  };

  return (
    <div style={{ padding: '0.5rem 0', backgroundColor: '#fefce8', backdropFilter: 'blur(3px)' }}>
      <div style={{ maxWidth: '1600px', margin: '0 auto' }}>
        <Carousel {...settings}>
          {Item.map((item) => {
            return (
              <div key={item.id}>
                <div
                  className="carousel-item"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    minHeight: '500px',
                  }}
                >
                  <img src={item.image} alt="packages" style={{ height: '500px', opacity: '0.95', zIndex: 1 }} />
                  <div
                    className="carousel-item-background"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                      filter: 'blur(2px)',
                      zIndex: 0,
                      opacity: '0.65',
                    }}
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Carousal;
