import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'
import img5 from '../../../assets/images/banner/5.jpg'
import img6 from '../../../assets/images/banner/6.jpg'
import BannerItem from './BannerItem'

const items = [
    {
        image: img2,
        previ: 1,
        id: 2,
        next: 3
    },
    {
        image: img3,
        previ: 2,
        id: 3,
        next: 4
    },
    {
        image: img4,
        previ: 3,
        id: 4,
        next: 5
    },
    {
        image: img5,
        previ: 1,
        id: 5,
        next: 6
    },
    {
        image: img6,
        previ: 5,
        id: 6,
        next: 1
    },
    {
        image: img1,
        previ: 6,
        id: 1,
        next: 2
    },
]

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
                {
                    items.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                    />)
                }
             
            </div>
        </div>
    );
};

export default Banner;