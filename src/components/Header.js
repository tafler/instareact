import React, { Component } from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <Link to="/" className="logo">
                        <img alt="logo" src={logo}/>
                    </Link>
                    <nav className="links">
                        <ul>
                            <li>
                                <Link to="/" className="menu__links">лента</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="menu__links">профиль</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
};
