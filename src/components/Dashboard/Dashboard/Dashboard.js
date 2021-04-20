import React, { useContext } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';


const Admin = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    return (
        <section>
            <div className="container-fluid row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    
                </div>
            </div>
        </section>
    );
};

export default Admin;