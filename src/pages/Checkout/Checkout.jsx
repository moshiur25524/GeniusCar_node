import { useLoaderData } from "react-router-dom";

const Checkout = () => {

    const {title, price, description, _id} = useLoaderData();

    const handleCheckout = e =>{
        e.preventDefault();
        const form = e.target;
        const name = `${form.first.value} ${form.last.value}`;
        const phone = form.phone.value;
        const email = form.email.value;
        const message= form.message.value;

        const order = {
            service: _id,
            serviceName: title,
            customer: name,
            description,
            phone,
            email,
            message
        }

        fetch('http://localhost:5000/order',{
            method:'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Thanks for your Order')
                e.target.reset()
            }
            console.log(data);
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1 className="text-4xl text-center">Your order is : {title}</h1>
            <p className="text-3xl text-orange-600 font-semibold text-center">Price: {price}</p>
            <form action="" onSubmit={handleCheckout}>
                <div className="grid gap-4 grid-col-1 lg:grid-cols-2">
                    <input name="first" type="text" placeholder="First Name" className="input input-bordered input-md w-full" required/>
                    <input name="last" type="text" placeholder="Last Name" className="input input-bordered input-md w-full" required/>
                    <input name="phone" type="text" placeholder="Phone" className="input input-bordered input-md w-full" required/>
                    <input name="email" type="email" placeholder="Email" className="input input-bordered input-md w-full" required/>
                </div>
                <textarea name="message" placeholder="Your Message" className=" my-5 textarea textarea-bordered textarea-lg w-full" ></textarea>
                <input className="btn block w-1/5 mx-auto mb-5" type="submit" value="Order" />
            </form>
        </div>
    );
};

export default Checkout;