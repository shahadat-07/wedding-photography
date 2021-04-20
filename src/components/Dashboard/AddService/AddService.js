import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (event) => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file',file);
        formData.append('title',info.title);
        formData.append('price',info.price);
        formData.append('address',info.address);

        fetch('https://aqueous-beach-55232.herokuapp.com/addService', {
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
                    <h1 className="text-info">Add a Service</h1>
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Title</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="title" placeholder="Enter title" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Price</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="price" placeholder="Price" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Address</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="address" placeholder="Address" />
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Add an Image</label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1" placeholder="Add an Image" /><br />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddService;