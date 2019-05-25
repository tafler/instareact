import React from 'react';
import Posts from './Posts';
import Users from './Users';

export default function Feed() {
    return (
        <div className="container feed">
            <Posts />
            <Users />
        </div>
    );
}
