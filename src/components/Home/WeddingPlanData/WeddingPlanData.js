import React from 'react';

const WeddingPlanData = ({ data }) => {
    return (
        <div className="col-md-4 p-5 mb-5 pb-5">
            <div class="card  align-items-center">
                <img class="card-img-top" src="..." alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default WeddingPlanData;