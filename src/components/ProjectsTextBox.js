import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FlipCard from './FlipCard';
import img1 from '../images/hMhUPic.png';
import img2 from '../images/NatPaPic.png';
import img3 from '../images/pyramids.jfif';



const cards = [
    {
        id: '1',
        variant: 'hover',
        route: '../projects/hMhUfinal',
        front: '',
        image: img1,
        back: 'Back'
    },
    {
        id: '3',
        variant: 'hover',
        route: '../projects/Project2/homepage.html',
        front: '',
        image: img2
        // back: 'Back'
    },
    {
        id: '3',
        variant: 'hover',
        front: '',
        image: img3
        // back: 'Back'
    }
];

const TextBox3 = () => {
    return (
        <div className='projects-textbox'>
            <h3 id='projects'>Projects</h3>
                <div className='container'>
                    <div className='row h-100'>
                        <div class='col d-flex flex-column flex-md-row justify-content-around align-items-center'>
                            {/* <img src={IMG1}></img> */}
                            {cards.map((card) => (
                                <FlipCard key={card.id} card={card} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        
    )
}

export default TextBox3;