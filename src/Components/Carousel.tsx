import React from 'react';
import { Carousel } from 'antd';
import bg1 from './CarouselSVGs/1.svg';
import bg2 from './CarouselSVGs/2.svg';
import bg3 from './CarouselSVGs/3.svg';
import bg4 from './CarouselSVGs/4.svg';
import bg5 from './CarouselSVGs/5.svg';
import bg6 from './CarouselSVGs/6.svg';
import bg7 from './CarouselSVGs/7.svg';



const Caroucsell: React.FC = () => (
  <Carousel autoplay>
    <div>
    <div style={{ ...contentStyle, backgroundImage: `url(${bg1})` }}>
        <h3>1</h3>
      </div>
    </div>

    <div>
    <div style={{ ...contentStyle, backgroundImage: `url(${bg2})` }}>
        <h3>2</h3>
      </div>
    </div>

    <div>
    <div style={{ ...contentStyle, backgroundImage: `url(${bg3})` }}>
        <h3>3</h3>
      </div>
    </div>

    <div>
    <div style={{ ...contentStyle, backgroundImage: `url(${bg4})` }}>
        <h3>4</h3>
      </div>
    </div>

    <div>
    <div style={{ ...contentStyle, backgroundImage: `url(${bg5})` }}>
        <h3>5</h3>
      </div>
    </div>

    <div>
    <div style={{ ...contentStyle, backgroundImage: `url(${bg6})` }}>
        <h3>6</h3>
      </div>
    </div>

    <div>
    <div style={{ ...contentStyle, backgroundImage: `url(${bg7})` }}>
        <h3>7</h3>
      </div>
    </div>



  </Carousel>
);

const contentStyle: React.CSSProperties = {
  height: '400px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  marginTop: '-17px',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default Caroucsell;
