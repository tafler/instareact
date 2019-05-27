export default class InstaService {
    constructor() {
        this._apiBase = 'http://localhost:3000/';
    }

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, recived ${res.status}`);
        }
        return res.json();

    }

    getAllPost = async () => {
        const res = await this.getResource('posts/');
        return res;
    }

    getAllPhotos = async () => {
        const res = await this.getResource('posts/');
        res.map(this._getUsers);
        return res;
    }

    getAllUsers = async () => {
        const res = await this.getResource('posts/');
        res.map(this._transformPosts);
        return res;
    }


    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt,
            id: post.id,
        }
    }
    _getUsers = (post) => {
        return {
            name: post.name,
            photo: post.photo,
            altname: post.altname,
            id: post.id,
        }
    }
}