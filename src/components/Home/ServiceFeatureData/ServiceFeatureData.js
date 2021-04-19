import React from 'react';

const ServiceFeatureData = ({service}) => {
    return (
        <div className="col-md-4">
            < div className="card shadow-sm" >
                <div className="card-header  align-items-center">
                    {
                        service.img ? <img  style={{height:'200px'}}  src={`data:image/jpeg;base64,${service.img.image}`} />
                        :
                        <img style={{height:'200px'}} className="mx-3 img-fluid" src={service.image} alt="" />
                    }
                </div>
                <div className="card-body">
                    <h6 className="text-primary mt-5">{service.title}</h6>
                    <p className="card-text text-secondary mt-4">${service.price}</p>
                    <p className="m-0">{service.address}</p>
                </div>

            </div >
        </div>
    );
};

export default ServiceFeatureData;