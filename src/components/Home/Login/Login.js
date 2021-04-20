import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
  
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { email, displayName } = result.user;
                const signedInInfo = { email, displayName };
                setLoggedInUser(signedInInfo);
                history.replace(from);

            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
    }

    return (
        <div>
            <div>
                <h2 className="text-center">Let's Have a Discussion </h2>
                <h3 className="text-center"> About Your Identification </h3>
                <br />
                <div className="d-flex justify-content-center"><button className="btn-success p-2" onClick={handleGoogleSignIn}> Sign in with Google </button></div>
            </div>
    );
        </div>
    );
};

export default Login;