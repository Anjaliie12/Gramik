import React, {  useEffect, useState } from "react";

import SliderImages from "./SliderImages";

const Content = ({autoPlay = true, delay = 3000}) => {
    const images = SliderImages;
    const [current, setCurrent] = useState(0);
    
    useEffect(()=> {
        const timer = setInterval(()=>{
            setCurrent(prev => (prev + 1) % images.length);
        },delay);
        return() => clearInterval(timer);
    }, [images.length,delay]);

       return(
        <div className="slidershow-container">    
        {images.map((image, index) => (
             <div className="mySlides " key={image.url}
             style={{ display: index === current ? "block" : "none" }}>
                <img src= {image.url} alt="image.cation" style={{ width: "100%" }} />
                <div className="text">{image.caption}</div>
            </div>
        
         ))}
      <a className="prev" onClick={() => setCurrent((current - 1 + images.length) % images.length)}>❮</a>
      <a className="next" onClick={() => setCurrent((current + 1) % images.length)}>❯</a> 
           </div>
    );
};

export default Content;

