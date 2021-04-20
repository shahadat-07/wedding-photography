import React from 'react';

const WeddingPlanData = ({ data }) => {
    return (
        <div className="col-md-4 col-sm-6 p-5 mb-5 pb-5">
            <div class="card  align-items-center">
                <div class="card-body">
                    <h5 class="card-title">{data.title}</h5>
                    <p class="card-text">{data.description}</p>
                </div>
            </div>
        </div>
    );
};

export default WeddingPlanData;