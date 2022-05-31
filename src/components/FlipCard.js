import cn from 'classnames';
import { useState } from 'react';


function FlipCard({ card }) {
    
    return (
        <div className='flip-card'>
        <div className="flip-card-outer">
            <div className={cn('flip-card-inner', {
                'hover-trigger': card.variant === 'hover'
            })}>
                <div className="card card-front">
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <p className="card-text fs-1 fw-bold">{card.front}</p>
                        <a href={card.route}><img className="flip-card-img img-fluid" src={card.image} alt='pic of project'/></a>
                    </div>
                    
                </div>
                <div className="card card-back">
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <p className="card-text fs-1 fw-bold">{card.back}</p>
                    </div>
                </div>
            </div>
            
        </div>
      </div>  
    )
}


export default FlipCard;

