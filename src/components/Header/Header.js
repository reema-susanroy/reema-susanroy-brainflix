import './Header.scss';
import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/photos/Mohan-muruge.jpg'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar__logo'>
                    <Link to="/">
                        <img className='navbar__logo--item' src={logo} alt='brainflix-logo' />
                    </Link>
                </div>
                <div className='navbar__side-container'>
                    <div className='navbar__search navbar__logo'>
                        <form className='navbar__search-form'>
                            <label htmlFor='search' />
                            <input className="input" id="search" name='input' placeholder='Search' />
                        </form>
                        <div className='navbar__image-mobile '>
                            <img src={avatar} alt='avatar' />
                        </div>
                    </div>
                    <Link to='/upload' className='navbar__button'>
                            <button className='navbar__button--upload'>Upload</button>
                    </Link>
                    <div className='navbar__image-tablet'>
                        <img src={avatar} alt='avatar' />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;