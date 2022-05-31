import React from "react";
import { Carousel } from 'react-bootstrap';
import html5 from '../../images/newesthtml5.png';
import css3 from '../../images/css3.png';
import javascript from '../../images/javascriptnew.png';
import bootstrap from '../../images/newbootstrap.png';
import sass from '../../images/newsass.png';
import react from '../../images/newreact.png';
import jQuery from '../../images/newjQuery.png';
import node from '../../images/newnode.png';
import mongoDB from '../../images/newmongoDB.png';

export default function BootstrapCarousel() {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block html5"
      src={html5}
      alt="HTML5"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block css3"
      src={css3}
      alt="CSS3"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block javascript"
      src={javascript}
      alt="JavaScript"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

<Carousel.Item>
    <img
      className="d-block bootstrap"
      src={bootstrap}
      alt="Bootstrap"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block sass"
      src={sass}
      alt="Sass"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block jQuery"
      src={jQuery}
      alt="jQuery"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block react"
      src={react}
      alt="React"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block node"
      src={node}
      alt="Node"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block mongoDB"
      src={mongoDB}
      alt="MongoDB"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>  
        </div>
    )
}



// import React, { useEffect, useState } from 'react';
// import { useSwipeable } from 'react-swipeable';
// import '../Carousel/Carousel.css';

// export const CarouselItem = ({ children, width }) => {
//     return (
//         <div className='carousel-item' style={{ width: width }}>
//             {children}
//         </div>
//     );
// };


// const Carousel = ({ children }) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const [paused, setPaused] = useState(false);

//     const updateIndex = (newIndex) => {
//         if(newIndex < 0) {
//             newIndex = React.Children.count(children) - 1;
//         } else if (newIndex >= React.Children.count(children)) {
//             newIndex = 0;
//         }

//        setActiveIndex(newIndex);  
//     }

//     const handlers = useSwipeable({
//         onSwipedLeft: () => updateIndex(activeIndex + 1),
//         onSwipedRight: () => updateIndex(activeIndex - 1)
//     });

//     return (
//         <div 
//             {...handlers}
//             className='carousel'
//             onMouseEnter={() => setPaused(true)}
//             onMouseLeave={() => setPaused(false)}
//         >
//             <div className='inner' 
//                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
//                  >
//                 {React.Children.map(children, (child, index) => {
//                     return React.cloneElement(child, { width: '100%' });
//                 })}
//             </div>
//             <div className='indicators'>
//                 <button
//                     onClick={() => {
//                         updateIndex(activeIndex - 1);
//                     }}
//                     >
//                     Prev
//                 </button>
//                 {React.Children.map(children, (child, index) => {
//                     return (
//                         <button
//                             className={`${index === activeIndex ? 'active' : ''}`}
//                             onClick={() => {
//                                 updateIndex(index);
//                             }}
//                         >
//                             {index + 1}
//                         </button>
//                     )
//                 })}
//                 <button
//                     onClick={() => {
//                         updateIndex(activeIndex + 1);
//                     }}
//                 >
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Carousel;