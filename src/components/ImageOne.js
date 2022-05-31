import { Parallax } from 'react-parallax';
import StoneHenge from '../images/stonehenge.jfif';

const ImageOne = () => (
    <Parallax className='image1' bgImage={StoneHenge} bgImageAlt="stonehenge" strength={800}>
        <div className='content'>
            <span className='img-txt'>Kris Wuori's Portfolio</span>
        </div>
    </Parallax>
);

export default ImageOne;