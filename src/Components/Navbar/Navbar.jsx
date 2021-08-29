import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <div>
                <NavLink to="/profile" activeClassName={s.activeLink}>Профайл</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Сообщения</NavLink>
            </div>
            <div>
                <NavLink to="/users" activeClassName={s.activeLink}>Пользователи</NavLink>
            </div>
            <div>
                <NavLink to="/news" activeClassName={s.activeLink}>Новости</NavLink>
            </div>
            <div>
                <NavLink to='music' activeClassName={s.activeLink}>Музыка</NavLink>
            </div>
            <div>
                <NavLink to='video' activeClassName={s.activeLink}>Видео</NavLink>
            </div>
            <div>
                <NavLink to='settings' activeClassName={s.activeLink}>Настройка</NavLink>
            </div>
        </div>
    </nav>
}

export default Navbar;