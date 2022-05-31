import { Parallax } from 'react-parallax';
import Planets from '../images/planets.jfif';

const ImageTwo = () => (
    <Parallax className='image2' bgImage={Planets} bgImageAlt="stonehenge" strength={800}>
        <div className='content'>
            <span className='img-txt'>Languages</span>
        </div>
    </Parallax>
);

export default ImageTwo;