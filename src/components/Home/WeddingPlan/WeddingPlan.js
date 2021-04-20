import React from 'react';
import WeddingPlanData from '../WeddingPlanData/WeddingPlanData';

const weddingData = [
    {
        title: 'Find local vendor',
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.'
    },
    {
        title: 'Contact vendor',
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.'
    },
    {
        title: 'Save Your Date',
        description: 'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.'
    }
]

const WeddingPlan = () => {
    return (
        <section>
            <div className="container text-center">
                <div className="row">
                    <h1 className="pt-5 mt-5"> Your Wedding Planing Start Here</h1>
                    <h5>Various versions have evolved over the years sometimes by accident sometimes on purpose.</h5>
                    {
                        weddingData.map(data => <WeddingPlanData data={data}></WeddingPlanData>)
                    }
                </div>
            </div>
        </section>
    );
};

export default WeddingPlan;