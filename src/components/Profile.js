import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User 
                src={''}
                alt={'name'}
                name={'man'}
                />
            <Palette></Palette>
        </div>
    );
}

export default Profile;