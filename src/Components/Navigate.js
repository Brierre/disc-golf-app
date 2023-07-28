import React from 'react';
import CircularNav from './CircularNav.js';

function Navigate() {
    return (
        <div>
            <nav className="navbar navbar-expand-md" id="dg-nav">
                <div className="container">
                    <div className="navbar-brand" href="#">
                        <CircularNav />
                    </div>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="links-and-dd">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://discgolfmetrix.com/?u=rule&ID=37" target="_blank" rel="noreferrer">
                                    Course Data
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/Brierre/disc-golf-app/tree/refactored" target="_blank" rel="noreferrer">
                                    GitHub Repo
                                </a>
                            </li>
                            <li className="nav-item dropdown" id="navbarNavDropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    id="navbarDropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">
                                        Dropdown link
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="/">
                                        Do
                                    </a>
                                    <a className="dropdown-item" href="/">
                                        Do Not
                                    </a>
                                    <a className="dropdown-item disabled" href="/">
                                        Try
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}


export default Navigate;
