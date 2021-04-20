import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const CheckOut = () => {
    const { id } = useParams();
    console.log(id)

    const [service, setService] = useState({});
    console.log(service)

    useEffect(() => {
        fetch('https://aqueous-beach-55232.herokuapp.com/service/' + id)
            .then(res => res.json())
            .then(data => {
                setService(data);

            })
    }, [])

    const { title, price, address } = service;


    const handleCheckOut = () =>{
        const checkOut = { title, price, address};
        fetch('https://aqueous-beach-55232.herokuapp.com/package/' + id,{
            method : 'POST',
            headers :{ 'Content-Type' : 'application/json'},
            body : JSON.stringify(checkOut)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="text-center">
            <h1 className="mb-5">Thanks For Your Booking</h1>
            <div>
                {
                    service.img ? <img style={{ height: '200px' }} src={`data:image/jpeg;base64,${service.img.image}`} />
                        :
                        <img style={{ height: '200px' }} className="mx-3 img-fluid" src={service.image} alt="" />
                }
            </div>
            <h6 className="text-primary mt-5">{service.title}</h6>
            <p className="card-text text-secondary mt-4">${service.price}</p>
            <p className="m-0 mb-3">{service.address}</p>
            <Link to={'/orderList/' + id}><button onClick={handleCheckOut}>Check Out</button></Link>
        </div>
    );
};

export default CheckOut;