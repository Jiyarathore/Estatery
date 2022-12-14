import React from 'react';
import "./header.css";
import estatery_logo from '../../assets/estatery_logo.png';
import RoofingIcon from '@mui/icons-material/Roofing';

function Header() {
    return (
        <>
            <header>
                <div className='containernav flex'>
                    <div className='logo flex'>
                        <RoofingIcon/>
                        <h2>Estatery</h2>
                    </div>
                    <div className='nav'>
                        <ul className='flex'>
                            <li> <a href='#rent'>Rent</a> </li>
                            <li> <a href='#buy'>Buy</a> </li>
                            <li> <a href='#sell'>Sell</a> </li>
                            <li> <a href='#prty'>Manage Property</a> </li>
                            <li> <a href='#res'>Resources</a> </li>
                        </ul>
                    </div>
                    <div className='buttons flex'>
                        <button className='btn1'>
                            Login
                        </button>
                        <button className='btn2'>Sign up</button>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header