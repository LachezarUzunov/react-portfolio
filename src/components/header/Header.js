import classes from './Header.module.css';
import CallToActions from './CallToActions';
import HeaderSocials from './HeaderSocials';
import ME from '../../assets/me.png';

const Header = () => {
    return (
        <header>
            <div className='container header__container'>
                <h5>Hello, I'm</h5>
                <h1>Jonny Cash</h1>
                <h5 className='lext-light'>Fullstack Developer</h5>
                <CallToActions />
                <HeaderSocials />

                <div className='me'>
                    <img src={ME} alt="profile"/>
                </div>

                <a href="#contact" className='scroll_down'>Scroll Down</a>
            </div>
        </header>
    )
}

export default Header;