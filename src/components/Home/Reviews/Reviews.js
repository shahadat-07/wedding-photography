import React from 'react';
import ReviewsData from '../ReviewsData/ReviewsData';
import review1 from '../../../images/review-1.jpg';
import review2 from '../../../images/review-2.jpg';
import review3 from '../../../images/review-3.jpg';

const reviewsData = [
    {
        image: review1,
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita autem magni, sunt voluptates excepturi animi molestias modi pariatur praesentium explicabo.',
        title: 'Kan Williamson',
        date: '25 April, 2021'
    },
    {
        image: review2,
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita autem magni, sunt voluptates excepturi animi molestias modi pariatur praesentium explicabo.',
        title: 'Steve Smith',
        date: '25 April, 2021'
    },
    {
        image: review3,
        description: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita autem magni, sunt voluptates excepturi animi molestias modi pariatur praesentium explicabo.',
        title: 'David Warner',
        date: '25 April, 2021'
    }
]

const Reviews = () => {
    return (
        <section className="container">
            <div className="row text-center">
                <h3>Just Get Married Happy Couple</h3>
                <h6 className="text-secondary mb-5 pb-5">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</h6>
               { 
               reviewsData.map(data => <ReviewsData data = {data}></ReviewsData>)
               }
            </div>
        </section>
    );
};

export default Reviews;