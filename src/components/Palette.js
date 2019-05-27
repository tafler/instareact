import React, { Component } from 'react';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Palette extends Component {
    InstaService = new InstaService();
    state = {
        photos: [],
        error: false
    }

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError)
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            photos
        })
    }

    onError = (err) => {
        this.setState({
            error: true
        })
    }

    renderItems(arr) {

        return arr.map((item) => {
            const {src, alt, id} = item;

            return (
                <img src={src} alt={alt} key={id}></img>
            )
        })
    }


    render() {
        const {error, photos} = this.state;
        if (error) {
            return <ErrorMessage />
        }
        const items = this.renderItems(photos);

        return (
            <div className="palette">
                {items}
            </div>
        )
    }
}