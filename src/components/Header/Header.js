import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'></Link>
            <Link to='/banner'></Link>
            <Link to='/services'></Link>
            <Link to='/home'></Link>
        </div>
    );
};

export default Header;