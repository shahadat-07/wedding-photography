import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [admin,setAdmin] = useState();

    console.log(loggedInUser);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://aqueous-beach-55232.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data);
            })

    }, [])


    // useEffect(() =>{
    //     fetch('https://aqueous-beach-55232.herokuapp.com/admin')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAdmin(data);
    //     })
    // },[])
    return (
        <div>
            <ul className="sidebar mt-5">
                <Link to="orderList"><li>Order List</li></Link>
                <Link to="addReview"><li>Add Review</li></Link>

                {isAdmin &&
                    <div>
                        <Link to="addService"><li>Add Service</li></Link>
                        <Link to="makeAdmin"><li>Make Admin</li></Link>
                        <Link to="manageService"><li>Manage Services</li></Link>
                    </div>
                }
            </ul>
        </div>
    );
};

export default Sidebar;