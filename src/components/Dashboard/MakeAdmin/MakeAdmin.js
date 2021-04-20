import React, { useState } from 'react';

const MakeAdmin = () => {
    const [info, setInfo] = useState();
    console.log(info)
    const handleBlur = (event) => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }

    const handleFormSubmit = () => {
        const formData = new FormData()
        formData.append('email', info.email);

        fetch('https://aqueous-beach-55232.herokuapp.com/addAdmin', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <form onSubmit={handleFormSubmit}>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="Enter email" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
};

export default MakeAdmin;