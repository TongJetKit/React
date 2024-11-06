import React from 'react'
import './NavBar.css';
import { Link,useMatch, useResolvedPath } from 'react-router-dom';

function NavBar() {



  return (
    <nav className='nav-container'>
        <div className='nav-title'>
            <Link to="/">Gacha</Link>
        </div>
        <div className='nav-menu'>
            <ul>
                <CustomLink to='/arcanist'>Arcanist</CustomLink>
                <CustomLink to='/leaks'>Leaks</CustomLink>
            </ul>
        </div>
    
    </nav>

  )
}

function CustomLink(props){
    const resolvedPath = useResolvedPath(props.to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return(
        <li className={isActive ? "nav-menu-active":""}>
            <Link to={props.to}>{props.children}</Link>
        </li>
    )
}

export default NavBar