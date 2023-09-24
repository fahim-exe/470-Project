import { Button, formControlClasses } from '@mui/material';
import React from 'react';
import "./Login.css";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from './StateProvider';


function Login() {
    const [state, dispatch] = useStateValue();


    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((resutl) => {

                dispatch({
                    type: actionTypes.SET_USER,
                    user: resutl.user,
                })
                console.log(resutl);
            })
            .catch((error) => alert(error.message));


    };

    return (
        <div className='login'>
            <div className='login__logo'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Gamebook_transparent.png"
                />

                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Gamebook_Bottom.png"

                />
            </div>

            <Button type='submit' onClick={signIn}>
                Sign In
            </Button>

        </div>
    );
}

export default Login;