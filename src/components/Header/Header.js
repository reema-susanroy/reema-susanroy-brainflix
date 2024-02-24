import './Header.scss';

import logo from '../../assets/images/logo/BrainFlix-logo.svg'
import avatar from '../../assets/images/photos/Mohan-muruge.jpg'

function Header() {
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar__logo navbar__left'>
                    <img className='navbar__logo--item' src={logo} alt='brainflix-logo' />
                </div>
                <div className='navbar__side-container navbar__right'>
                    <div className='navbar__search navbar__logo'>
                        <form className='navbar__search-form'>
                            <label htmlFor='search'></label>
                            <input id="search" name='input' placeholder='Search' />
                        </form>
                        <div className='navbar__image-mobile '>
                            <img src={avatar} alt='avatar' />
                        </div>
                    </div>
                    <div className='navbar__button'>
                        <button className='navbar__button--upload'>Upload</button>
                    </div>
                    <div className='navbar__image-tablet'>
                        <img src={avatar} alt='avatar' />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;