import React, { useState, useEffect } from 'react';
import ReviewsData from '../ReviewsData/ReviewsData';




const Reviews = () => {

    const [reviewsData,setReviewsData] = useState([]);

    useEffect(() =>{
        fetch('https://aqueous-beach-55232.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => {
            setReviewsData(data);
        })
    },[])



    // const handleAddProduct = () =>{
    //     fetch('https://aqueous-beach-55232.herokuapp.com/addProduct',{
    //         method : 'POST',
    //         headers : {'Content-Type' : 'application/json'},
    //         body : JSON.stringify(fakeReviews[2])
    //     })
    // }

    return (
        <section className="container">
            <div className="row text-center">
                {/* <button onClick={handleAddProduct}>Add</button> */}
                <h3>Just Get Married Happy Couple</h3>
                <h6 className="text-secondary mb-5 pb-5">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</h6>
               { 
               reviewsData.map(review => <ReviewsData review = {review}></ReviewsData>)
               }
            </div>
        </section>
    );
};

export default Reviews;