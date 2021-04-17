import React from 'react';

const ReviewsData = (props) => {
    const { image, description, title, date } = props.data;
    return (
        <div className="col-md-4 mb-5 pb-5">
            <ul class="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                <li>
                    <img className="rounded-circle" src={image}  alt=""/>
                    <p>{description}</p>
                    <h5>{title}</h5>
                    <small>{date}</small>
                </li>
            </ul>
        </div>
    );
};

export default ReviewsData;