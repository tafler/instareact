import React from 'react';
import User from './User';

export default function Users() {
    return (
        <div className="right">
            <User src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" alt="some man" name="Name" />
            <div className="users__block">
                <User src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" alt="some man" name="Name" min />
                <User src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" alt="some man" name="Name" min />
                <User src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" alt="some man" name="Name" min />
                <User src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" alt="some man" name="Name" min />
                <User src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" alt="some man" name="Name" min />
            </div>
        </div>
    )
}