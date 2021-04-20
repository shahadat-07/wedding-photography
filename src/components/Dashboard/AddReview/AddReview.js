import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddReview = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleReviewBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleReviewFileChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }


    const handleReviewSubmit = () => {
        const formData = new FormData()
        formData.append('file',file);
        formData.append('title',info.title);
        formData.append('price',info.description);
        formData.append('address',info.date);

        fetch('https://aqueous-beach-55232.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }


    return (
        <section className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 mt-5">
                    <h1 className="text-info">Add a Review</h1>
                    <form onSubmit={handleReviewSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input onBlur={handleReviewBlur} type="text" class="form-control" name="title" placeholder="Enter title" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Description</label>
                            <input onBlur={handleReviewBlur} type="text" class="form-control" name="description" placeholder="description" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Address</label>
                            <input onBlur={handleReviewBlur} type="text" class="form-control" name="date" placeholder="date" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Add an Image</label>
                            <input onChange={handleReviewFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Add an Image" /><br />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddReview;