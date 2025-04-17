import React, {useState} from 'react'
import './NavBar.css';
import { Link,useMatch, useResolvedPath } from 'react-router-dom';

function NavBar() {
    // const [scrollState, setScrollState] = useState("");
    // const handleScroll = () =>{
    //     if(window.scrollY > 350){
    //         setScrollState("nav-scrolled");
    //     }else{
    //         setScrollState("");
    //     }
    // };

    // window.addEventListener('scroll', handleScroll);

  return (
    <nav className={`nav-container `}>
        <div className='nav-title'>
            <Link to="/">MARCUS'S SUITCASE</Link>
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