import React, { Component } from 'react'
import UIKIT from 'uikit'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Banner extends Component {
    render() {
        return (
            <section className="banner" id="banner-section">
                <div className="uk-grid-match" data-uk-grid>
                    <div className="uk-width-1-6@m uk-visible@m">
                        <div className="right-bar">
                            <ul className="uk-nav uk-nav-default uk-position-bottom uk-position-fixed ">
                                <li><a href="https://www.facebook.com/bhaswanth.kumar.9" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://linkedin.com/in/bhaswanthchittanoor" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://github.com/bhaswanth53" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-github"></i></a></li>
                                <li><a href="https://codepen.io/bhaswanth_chiruthanuru" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-codepen"></i></a></li>
                                <li><a href="https://www.instagram.com/its_me_man_of_attitude/?hl=en" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-instagram"></i></a></li>
                                <li><a href="https://twitter.com/bhaswanth4?lang=en" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-twitter"></i></a></li>
                                <li className="line-li"><a href="#" className="line"></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="uk-width-3-4@m" data-uk-scrollspy="cls:uk-animation-fade">
                        <div className="banner-div">
                            <p className="hi">Hi, my name is</p>
                            <p className="h1-white">Bhaswanth Chiruthanuru</p>
                            <p className="h1-grey">I build things for the web.</p>
                            <p className="text">
                                I'm a passionate full-stack developer known for the quality apps produced for Companies and Entrepreneurs around the globe to make their business ideas come true.
                            </p>
                            <AnchorLink offset='100' href="#contact-section">
                                <button className="uk-button uk-button-large touch">Get In Touch</button>
                            </AnchorLink>
                        </div>
                    </div>
                    <div className="uk-width-1-6@m uk-visible@m">
                        <div className="left-bar">
                            <ul className="uk-nav uk-nav-default  uk-position-bottom-right uk-position-fixed">
                                <li className="email"><a href="#">bhaswanth1997@gmail.com</a></li>
                                <li className="line-li"><a href="#" className="line"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner