import React, { useEffect, useState } from 'react';

const OrderList = () => {

    const [orders, setOrders] = useState([]);
    console.log(orders);
    useEffect(() => {
        fetch('https://aqueous-beach-55232.herokuapp.com/package/')
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [orders])
    return (
        <div className="container row">
            <h1 className="text-center m-5">This is Ordered List</h1>
            {
                orders.map(service =>
                    <div className="col-md-4">
                        < div className="card shadow-sm" >
                            <div className="card-body">
                                <h6 className="text-primary mt-5">{service.title}</h6>
                                <p className="card-text text-secondary mt-4">${service.price}</p>
                                <p className="m-0">{service.address}</p>
                            </div>

                        </div >
                    </div>

                )
            }
        </div>
    );
};

export default OrderList;