import { useEffect, useState } from "react";
import ServicesItems from "./ServicesItems";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setServices(data)
            })
    }, [])
    return (
        <div>
            <div className="text-center">
                <p className="text-2xl text-orange-600 font-semibold">services</p>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p className="my-5 w-1/2 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
            <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    services.map(service => <ServicesItems
                    key={service._id}
                    service = {service}
                    />)
                }
            </div>
            <div className="flex justify-center">
            <button className="btn btn-outline btn-warning my-10">More Services</button>
            </div>
        </div>
    );
};

export default Services;