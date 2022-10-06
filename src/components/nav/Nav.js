import classes from './Nav.module.css'
import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine} from 'react-icons/ri'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href='#' onClick={() => setActiveNav('#')} className={`${activeNav === '#' ? classes.active : ''}`}><AiOutlineHome /></a>
            <a href='#about' className={`${activeNav === '#about' ? classes.active : ''}`} onClick={() => setActiveNav('#about')} ><AiOutlineUser /></a>
            <a href='#experience' className={`${activeNav === '#experience' ? classes.active : ''}`} onClick={() => setActiveNav('#experience')}><BiBook /></a>
            <a href='#services' className={`${activeNav === '#services' ? classes.active : ''}`} onClick={() => setActiveNav('#services')}><RiServiceLine /></a>
            <a href='#contact' className={`${activeNav === '#contact' ? classes.active : ''}`} onClick={() => setActiveNav('#contact')}><BiMessageSquareDetail /></a>
        </nav>
    )
}

export default Nav;