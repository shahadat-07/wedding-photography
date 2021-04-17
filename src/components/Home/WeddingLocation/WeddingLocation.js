import React from 'react';
import location1 from '../../../images/location-1.jpg';
import location2 from '../../../images/location-2.jpg';
import location3 from '../../../images/location-3.jpg';
import location4 from '../../../images/location-4.jpg';
import location5 from '../../../images/location-5.jpg';

const WeddingLocation = () => {
    return (
        <section className="container my-5 py-5 ">
            <div className="row text-center">
                <h3>Top Wedding Locations</h3>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                <div className="col-md-4">
                    <img src={location1} alt="" srcset=""/>
                </div>
                <div className="col-md-4">
                    <img src={location2} alt="" srcset=""/>
                </div>
                <div className="col-md-4">
                    <img src={location3} alt="" srcset=""/>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-md-8">
                    <img src={location4} alt="" srcset=""/>
                </div>
                <div className="col-md-4">
                    <img src={location5} alt="" srcset=""/>
                </div>
            </div>
        </section>
    );
};

export default WeddingLocation;