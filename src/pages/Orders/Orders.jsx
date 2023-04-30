import { useContext, useEffect, useState } from "react";
import OrderRow from "./OrderRow";
import { AuthContext } from "../../contexts/UserContext/UserContext";

const Orders = () => {

    const { user, logOut } = useContext(AuthContext)
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if(res.status === 401 || res.status === 403){
                    logOut()
                }
            
               return res.json()
            })
            .then(data => {
                setOrders(data);
                console.log(data);
            })
    }, [user?.email])

    const handleDelete = id => {

        const proceed = window.confirm(`Are you want to delete ${orders.customer}`)

        if (proceed) {
            fetch(`http://localhost:5000/order/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h1 className="text-center text-4xl text-gray-500">Total orders: {orders.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label htmlFor="">
                                    Delete
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;