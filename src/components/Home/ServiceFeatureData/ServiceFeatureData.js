import React from 'react';

const ServiceFeatureData = (props) => {
    const { image, title, address, price } = props.data;
    return (
        <div className="col-md-4">
            < div className="card shadow-sm" >
                <div className="card-header  align-items-center">
                    <img className="mx-3 img-fluid" src={image} alt="" />
                </div>
                <div className="card-body">
                    <h6 className="text-primary mt-5">{title}</h6>
                    <p className="card-text text-secondary mt-4">${price}</p>
                    <p className="m-0">{address}</p>
                </div>

            </div >
        </div>
    );
};

export default ServiceFeatureData;