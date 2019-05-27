import React, { Component } from 'react';
import User from './User';
import InstaService from '../services/instaservice';
import ErrorMessage from './ErrorMessage';

export default class Users extends Component {
    InstaService = new InstaService();
    state = {
        users: [],
        error: false,
    }
    componentDidMount() {
        this.updateUsers();
    }
    
    updateUsers() {
        this.InstaService.getAllUsers()
        .then(this.onUsersLoaded)
        .catch(this.onError)
    }
    
    onUsersLoaded = (items) => {
        
        this.setState({
            users: items
        })
    }
    onError = (err) => {
        this.setState = {
            error: false
        }
    }
    renderItems(arr) {
        return arr.map((item) => {
            const { name, altname, photo, id } = item;
            return (
                <User name={name} alt={altname} src={photo} key={id} min></User>
            )
        })
    }

    render() {
        const {error, users} = this.state;
        if(error) {
            return <ErrorMessage />
        }

        const items = this.renderItems(users);
        return (
            <div className="right">
                <User src="https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/ecosystem.jpg" alt="some man" name="Name" />
                <div className="users__block">
                    {items}
                </div>
            </div>
        )
    }
}