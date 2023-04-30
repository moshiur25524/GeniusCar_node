import './Banner.css'

const BannerItem = ({slide}) => {
    const {image, previ, id, next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carosel-img'>
                <img src={image} className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 right-5 top-1/4 w-2/5">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable Price For Car Servicing
                </h1>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-1/2 w-1/2">
                <p className='text-3xl text-white'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4 w-3/4">
                <button className="btn btn-success mr-2">Success</button>
                <button className="btn btn-warning">Warning</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${previ}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;