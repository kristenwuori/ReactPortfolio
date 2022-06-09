import React from 'react';
import mapPic from '../../images/mapPic.png';
import fb from '../../images/facebook.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import '../Footer/style.css';

// import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer' id='foot'>
                
                <div className='contentHeaders'>
                    <h4 className='locatedHeader'>Where I'm Located:</h4>
                    <h4 className='folMeHeader'>Follow Me:</h4>
                    <h4 className='contactMeHeader'>Contact Me</h4>
                </div>
                <div className='footerContent'>
                    <div className='mapPic'>
                        
                        <img src={mapPic} alt='map' className='map-pic'></img>
                        {/* <p className='add1'>5533 W. West Wind Dr.</p> */}
                        {/* <p className='add2'>Glendale, AZ 85310</p> */}
                    </div>
                    
                    
                    <div className='socialMedia'>
                        
                        {/* <a href='https://www.instagram.com/kristenwhitney042/' target='_blank' rel='noreferrer'><img src={insta} alt='instagram' className='instagram'></img></a> */}
                        <a href='https://www.facebook.com/profile.php?id=100080873531347' target='_blank' rel='noreferrer'><img src={fb} alt='facebook' className='socialLinks' id='fbLogo'></img></a>
                        <a href='https://github.com/kristenwuori' target='_blank' rel='noreferrer'><img src={github} alt='github' className='socialLinks' id='gitHubLogo'></img></a>
                        <a href='https://www.linkedin.com/in/kris-wuori-05723b23b/' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin' className='socialLinks' id='linkedInLogo'></img></a>
                    </div>
                    <div className='contactMe'>
                        
                        <div className='details'>
                            <p className='name'>Kris Wuori</p>
                            <p className='number'>(480)875.0759</p>
                            <p className='email'>wuori.kristen@gmail.com</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Footer;