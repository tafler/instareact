import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="http://www.youandthemat.com/wp-content/uploads/nature-2-26-17.jpg" alt="nature"/>
                <Post src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Bachalpsee_reflection.jpg/250px-Bachalpsee_reflection.jpg" alt="nature"/>
            </div>
        )
    }
}
