import { Parallax } from 'react-parallax';
import Pyramids from '../images/pyramids.jfif';

const ImageThree = () => (
    <Parallax className='image3' bgImage={Pyramids} bgImageAlt="stonehenge" strength={800}>
        <div className='content'>
            <span className='img-txt'>Projects</span>
        </div>
    </Parallax>
);

export default ImageThree;