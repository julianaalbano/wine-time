import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="nav-container">
                <a href="/"><p>m + j</p></a>
                <a href="/our-thoughts"><p className="nav">our thoughts</p></a>
            </div>
        );
    }
}