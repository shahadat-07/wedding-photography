import React from 'react';
import service1 from '../../../images/service-1.jpg';
import service2 from '../../../images/service-2.jpg';
import service3 from '../../../images/service-3.jpg';
import ServiceFeatureData from '../ServiceFeatureData/ServiceFeatureData';

const serviceData = [
    {
        image : service1,
        title : 'Venue Vendor',
        address : ' Street Address, Name of Town, 12345, Country.',
        price : 200

    },
    {
        image : service2,
        title : 'Wedding Dress Vendor',
        address : 'Street Address, Name of Town, 12345, Country.',
        price : 400

    },
    {
        image : service3,
        title : 'Vendor Photographer',
        address : ' Street Address, Name of Town, 12345, Country.',
        price : 600

    }
]

const ServiceFeature = () => {
    return (
        <section className="container">
            <div className="row">
                <h3>Featured Wedding Vendor</h3>
                <p className="textSecondary"> Many desktop publishing packages and web page editors now use orem psum as their default model text.</p>
                {
                    serviceData.map(data => <ServiceFeatureData data={data}></ServiceFeatureData>)
                }
            </div>
        </section>
    );
};

export default ServiceFeature;