import Icon from '../ui/icon/Icon'
import { Link } from 'react-scroll'

const Menu = ({ menuOpen, onClickMenu }) => {


    return (
        <>
            <div className={`overlay ${menuOpen ? 'open' : ''}`}></div>
            <div className={`menu-wrapper ${menuOpen ? 'open' : ''}`}>
                <Icon id='cross' className='nav-close' onClick={onClickMenu} />
                <p className='title'>Vlad<span>.</span></p>
                <nav className='navigation'>
                    <Link onClick={onClickMenu} to="profile" smooth={true} duration={500} className='nav-item'>Home</Link>
                    <Link onClick={onClickMenu} to="projects" smooth={true} duration={500} className='nav-item'>Projects</Link>
                    <Link onClick={onClickMenu} to="resume" smooth={true} duration={500} className='nav-item'>Skills</Link>
                    <Link onClick={onClickMenu} to="contact" smooth={true} duration={500} className='nav-item'>Contact</Link>
                    <Link onClick={onClickMenu} to="contact" smooth={true} duration={500} className='nav-item'>Hire me</Link>
                </nav>
            </div>
        </>
    )
}

export default Menu