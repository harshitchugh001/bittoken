import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Google = ({ informParent = f => f }) => {
    const responseGoogle = (response) => {
        const credential = response.credential;
        console.log("Google Token: ", credential);

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API}/api/google-login`,
            data: { idToken: credential }
        })
        .then(response => {
            console.log('GOOGLE SIGNIN SUCCESS', response);
            // inform parent component
            informParent(response);
        })
        .catch(error => {
            console.log('GOOGLE SIGNIN ERROR', error.response);
        });
    };

    return (
        <GoogleOAuthProvider clientId={`${process.env.REACT_APP_GOOGLE_CLIENT_ID}`}>
            <div className="pb-3">
                <GoogleLogin
                    onSuccess={responseGoogle}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Google;
