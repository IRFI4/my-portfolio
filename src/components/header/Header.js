import React from 'react'
import Link from '../ui/link/Link'
// import Text from '../ui/text/Text'

const Header = () => {
    return (
        <header className='header'>
            <p className='title'>Vlad<span>.</span></p>

            <nav className='navigation'>
                <Link url={'#'} text='Home' className='nav-item' />
                <Link url={'#'} text='Projects' className='nav-item' />
                <Link url={'#'} text='Skills' className='nav-item' />
                <Link url={'#'} text='Contact' className='nav-item' />
                <Link url={'#'} text='Hire me' className='nav-item' />
            </nav>
        </header>
    )
}

export default Header