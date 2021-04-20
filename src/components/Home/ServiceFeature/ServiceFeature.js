import React, { useState, useEffect } from 'react';
import ServiceFeatureData from '../ServiceFeatureData/ServiceFeatureData';



const ServiceFeature = () => {

    const [serviceData,setServiceData] = useState([]);

    useEffect(() =>{
        fetch(`https://aqueous-beach-55232.herokuapp.com/services`)
        .then(res => res.json())
        .then(data => {
            setServiceData(data);
        })
    },[])




    // const handleAddProduct = () =>{
    //     fetch('https://aqueous-beach-55232.herokuapp.com/addProduct',{
    //         method : 'POST',
    //         headers : {'Content-Type' : 'application/json'},
    //         body : JSON.stringify(fakeServices[2])
    //     })
    // }

    return (
        <section className="container">
            <div className="row">
            {/* <button onClick={handleAddProduct}>Add</button> */}
                <h3>Featured Wedding Vendor</h3>
                <p className="textSecondary"> Many desktop publishing packages and web page editors now use orem psum as their default model text.</p>
                {
                    serviceData.map(service => <ServiceFeatureData service={service}></ServiceFeatureData>)
                }
            </div>
        </section>
    );
};

export default ServiceFeature;