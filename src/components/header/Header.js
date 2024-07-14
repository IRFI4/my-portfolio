import { Link } from 'react-scroll'
import Icon from '../ui/icon/Icon'

const Header = ({ onClick }) => {
    return (
        <header className='header'>
            <p className='title'>Vlad<span>.</span></p>
            <nav className='navigation'>
                <Link to="profile" smooth={true} duration={500} className='nav-item'>Home</Link>
                <Link to="projects" smooth={true} duration={500} className='nav-item'>Projects</Link>
                <Link to="resume" smooth={true} duration={500} className='nav-item'>Skills</Link>
                <Link to="contact" smooth={true} duration={500} className='nav-item'>Contact</Link>
                <Link to="contact" smooth={true} duration={500} className='nav-item'>Hire me</Link>
            </nav>
            <Icon id='menu' className='nav-menu' onClick={onClick} />
        </header>
    )
}

export default Header