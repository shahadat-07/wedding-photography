import React, { useEffect, useState } from 'react';
// import Admin from './Admin';

const ManageService = () => {

    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://aqueous-beach-55232.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services]);
    const handleDelete = (id) => {
        fetch('https://aqueous-beach-55232.herokuapp.com/delete/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log('delete')
            })
    }

    return (

        <div className="container row">
            {
                services.map(service =>
                    <div className="col-md-4">
                        <button className="btn btn-danger" onClick={() => handleDelete(service._id)}>Delete</button>
                        < div className="card shadow-sm" >
                            <div className="card-header  align-items-center">
                                {
                                    service.img ? <img style={{ height: '200px' }} src={`data:image/jpeg;base64,${service.img.image}`} />
                                        :
                                        <img style={{ height: '200px' }} className="mx-3 img-fluid" src={service.image} alt="" />
                                }
                            </div>
                            <div className="card-body">
                                <h6 className="text-primary mt-5">{service.title}</h6>
                                <p className="card-text text-secondary mt-4">${service.price}</p>
                                <p className="m-0">{service.address}</p>
                            </div>

                        </div >
                    </div>

                )
            }
        </div>






        //     <div>
        //     {/* <Admin /> */}
        //     <table className="table">
        //         <thead>
        //             <tr>
        //                 <th scope="col">Name</th>
        //                 <th scope="col">Price</th>
        //                 <th scope="col">Manage</th>
        //             </tr>
        //         </thead>
        //         <tbody>
        //             {
        //             service.map(product =>
        //                 <tr>
        //                     <th scope="row">{product.car}</th>
        //                     <td>${product.price}</td>
        //                     <td><button onClick={() => handleDelete(product._id)}>Delete</button></td>
        //                 </tr>)
        //             }
        //         </tbody>
        //     </table>

        // </div>
    );
};

export default ManageService;