import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import mapPic from '../images/mapPic.png';
import insta from '../images/instagram.png';
import fb from '../images/facebook.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';

// import { Modal, ModalBody, ModalHeader } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col className='mapPic'>
                        <h4 className='located'>Where I'm Located:</h4>
                        <img src={mapPic} alt='map' className='map-pic'></img>
                        {/* <p className='add1'>5533 W. West Wind Dr.</p> */}
                        {/* <p className='add2'>Glendale, AZ 85310</p> */}
                    </Col>
                    <Col className='socialMedia'>
                        <h4 className='folMe'>Follow Me:</h4>
                        {/* <a href='https://www.instagram.com/kristenwhitney042/' target='_blank' rel='noreferrer'><img src={insta} alt='instagram' className='instagram'></img></a> */}
                        <a href='https://www.facebook.com/profile.php?id=100080873531347' target='_blank' rel='noreferrer'><img src={fb} alt='facebook' className='facebook'></img></a>
                        <a href='https://github.com/kristenwuori' target='_blank' rel='noreferrer'><img src={github} alt='github' className='github'></img></a>
                        <a href='https://www.linkedin.com/in/kris-wuori-05723b23b/' target='_blank' rel='noreferrer'><img src={linkedin} alt='linkedin' className='linkedin'></img></a>
                    </Col>
                    <Col className='contactMe'>
                        <h4>Contact Me</h4>
                        <div className='details'>
                            <p className='name'>Kris Wuori</p>
                            <p className='number'>(480)875.0759</p>
                            <p className='email'>wuori.kristen@gmail.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;