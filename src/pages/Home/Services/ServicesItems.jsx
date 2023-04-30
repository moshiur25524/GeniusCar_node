import { Link } from "react-router-dom";

const ServicesItems = ({service}) => {
    const {_id,title, image, price, description} = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p className="text-orange-600 font-semibold">Price: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/checkout/${_id}`}><button className="btn btn-primary">Checkout</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesItems;