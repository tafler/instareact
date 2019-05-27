import React, { Component } from 'react';
import User from './User';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';
import loader from '../loader.svg';
export default class Posts extends Component {
    InstaService = new InstaService();

    state = {
        posts: [],
        error: false,
        loading: true,
    }

    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPost()
        .then(this.onPostsLoaded)
        .catch(this.onError)
    }

    onPostsLoaded = (posts) => {
        this.setState({
            posts,
            loading: false,
        })
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }

    renderItems(arr) {

        if(this.state.loading) {
            return (
                <div className="centered">
                    <img src={loader}></img>
                </div>
            )
        }
        return arr.map((item) => {
            
            const {name, altname, photo, src, alt, descr, id} = item;
            

            return (
                <div key={id} className="post">
                    <User src={photo} alt={altname} name={name} min />
                    <img alt={alt} src={src}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post__descr">
                        {descr}
                    </div>
                </div>
            )
        })
    }

    render() {
        const {error, posts} = this.state;
        if (error) {
            return <ErrorMessage />
        }
        const items = this.renderItems(posts);

        return (
            <div className="post">
                {items}
            </div>
        )
    }
}
