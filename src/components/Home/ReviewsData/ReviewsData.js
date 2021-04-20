import React from 'react';

const ReviewsData = ({ review }) => {
    return (
        <div className="col-md-4 col-sm-6 mb-5 pb-5">
            <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                <li>
                    {
                        review.img ? <img className="rounded-circle img-fluid mb-5" style={{ height: '200px' }} src={`data:image/jpeg;base64,${review.img.image}`} />
                            :
                        <img style={{ height: '200px' }} className="mx-3 rounded-circle img-fluid mb-5 img-fluid" src={review.image} alt="" />
                    }                  
                    <p>{review.description}</p>
                    <h5>{review.title}</h5>
                    <small>{review.date}</small>
                </li>
            </ul>
        </div>
    );
};

export default ReviewsData;