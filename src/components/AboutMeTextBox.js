import React from 'react';
import img1 from '../images/CroppedProfPicOfMe.jpg';

const TextBox1 = () => {
    return (
        <div className='about-me-textbox'>
            <h3>About Me</h3>
            <p>Innovative out-going problem solver with strong conflict resolution skills. 
                Thoughtful leader with strong communication skills and positive outlook. 
                <br/>
                Interested in stream-lining productivity and has an epic passion for people. 
                Extremely creative with an eye for design. </p>
            <img src={img1} alt='picOfMe' className='myPic'/>
        </div>
    )
}

export default TextBox1;