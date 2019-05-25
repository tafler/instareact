import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" alt="some man" name="Name" min />
                <img alt={this.props.alt} src={this.props.src}></img>
                <div className="post__name">
                    some name
                </div>
                <div className="post__descr">
                    some description text
                </div>
            </div>
        )
    }
}