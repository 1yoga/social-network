import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";



const Header = (props) => {
    return <header className={s.header}>
        <img alt="img" src='https://sun1-16.userapi.com/s/v1/ig2/M2bj2UX1G7OvU72o0Md44RKgCy863EvSzBdemLjbQs-LdsUr4VDIdb1Rx6GPw0s3khSuLOxR_LUeWNLaLJQWA_Q8.jpg?size=400x0&quality=96&crop=87,0,307,307&ava=1'/>

        <div className={s.loginBlock}>
            {props.isAuth
                ? <div> {props.login} - <button onClick={props.logout}>Выйти</button> </div>
                : <NavLink to={'/login'}>Войти</NavLink> }
        </div>
    </header>
}

export default Header;