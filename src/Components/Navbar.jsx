import React, { Component } from 'react'
import UIKIT from 'uikit'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Logo from '../images/logo-pic-small.png'
import Sidebar from './Sidebar'

class Navbar extends Component {
    render() {
        return (
            <div data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; bottom: #transparent-sticky-navbar">
                <nav className="uk-navbar-container cus-nav" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <AnchorLink className="uk-navbar-item uk-logo" href="#banner-section" offset='100'>
                            <img src={Logo} alt="Logo" />
                        </AnchorLink>
                    </div>
                    <div className="uk-navbar-right uk-visible@m">
                        <ul className="uk-navbar-nav">
                            <li><AnchorLink offset='100' href="#about-section"><span>01.</span> About</AnchorLink></li>
                            <li><AnchorLink offset='100' href="#experience-section"><span>02.</span> Experience</AnchorLink></li>
                            <li><AnchorLink offset='100' href="#skill-section"><span>03.</span> Skills</AnchorLink></li>
                            <li><AnchorLink offset='100' href="#projects-section"><span>04.</span> Work</AnchorLink></li>
                            <li><AnchorLink offset='100' href="#contact-section"><span>05.</span> Contact</AnchorLink></li>
                            <li className="resume"><a href="https://sourcerer.io/bhaswanth53" target="_blank" rel="noopener noreferrer"><span>Sourcerer</span></a></li>
                            <li className="resume"><a href="http://blog.bhaswanth.com/" target="_blank" rel="noopener noreferrer"><span>Blog</span></a></li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right uk-hidden@m">
                        <ul className="uk-navbar-nav">
                            <li className="navicon"><a href="#"data-uk-toggle="target: #sidemenu"><i aria-hidden className="fas fa-bars"></i></a></li>
                        </ul>
                    </div>
                </nav>
                <Sidebar />
            </div>
        )
    }
}

export default Navbar