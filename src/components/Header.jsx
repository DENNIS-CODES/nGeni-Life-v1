import { height } from '@mui/system'
import React from 'react'
import logo  from '../components/images/logo.png'
import classes from './Header.module.css'
function Header() {
    return (
        <header className={classes.header}>
            <img src={logo} style={{}
                height: 200px;
}}/>
        </header>
    )
}

export default Header
