import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);

    return (
        <div>
            <h1 className='text-2xl font-semibold m-6'>Welcome {user.displayName} <br /> Here's your profile</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 '>
                <div className='card m-8 p-5 border'>
                    <img className='mask mask-squircle w-32' src={user?.photoURL} alt="" />
                    <p>Name: {user?.displayName}</p>
                    <p>Email: {user?.email}</p>
                    <p>Phone: </p>
                    <p>Age: </p>
                    <p>Address: </p>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Profile;