import React, { Component } from 'react'
import profile from '../images/me.jpg'

class About extends Component {
    render() {
        return (
            <section className="about-section" id="about-section">
                <div className="uk-flex-center" data-uk-grid>
                    <div className="uk-width-3-4@m">
                        <div className="uk-grid-match" data-uk-grid>
                            <div className="uk-width-1-2@m about-div" data-uk-scrollspy="cls:uk-animation-slide-left-small">
                                <h3 className="uk-heading-line about-head"><span><label>01.</label> About Me</span></h3>
                                <div className="uk-hidden@m about-image-m">
                                    <img src={profile} alt="Profile Pic" />
                                </div>
                                <p>Hello! I'm Bhaswanth, a passionate full-stack developer who enjoys building things that live on the internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user interfaces with efficient and modern backends.</p>
                                <p>
                                    Shortly after finishing B.Tech from <a href="http://www.nbkrist.org/" className="uk-button uk-button-text" target="_blank" rel="noopener noreferrer">N.B.K.R Institute Of Science & Technology</a>, I worked with so many freelance and full-time teams in order to earn experience and strong knowledge in my field for more than 2 years.
                                </p>
                                <p>Here are a few technologies I've been working with recently:</p>
                                <div className="uk-grid-match uk-margin-top uk-visible@m" data-uk-grid>
                                    <div className="uk-width-1-2@m">
                                        <ul className="uk-list">
                                            <li><i aria-hidden className="fab fa-js"></i> Javascript</li>
                                            <li><i aria-hidden className="fab fa-vuejs"></i> Vue JS</li>
                                            <li><i aria-hidden className="fab fa-react"></i> React JS</li>
                                            <li><i aria-hidden className="fab fa-node-js"></i> Node JS & Mongo DB</li>
                                        </ul>
                                    </div>
                                    <div className="uk-width-1-2@m">
                                        <ul className="uk-list">
                                            <li><i aria-hidden className="fab fa-php"></i> PHP & MySql</li>
                                            <li><i aria-hidden className="fab fa-html5"></i> HTML & CSS</li>
                                            <li><i aria-hidden className="fab fa-python"></i> Python</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="uk-grid-match uk-margin-top uk-hidden@m" data-uk-grid>
                                    <div className="uk-width-1-2@m">
                                        <ul className="uk-list">
                                            <li><i aria-hidden className="fab fa-js"></i> Javascript</li>
                                            <li><i aria-hidden className="fab fa-vuejs"></i> Vue JS</li>
                                            <li><i aria-hidden className="fab fa-react"></i> React JS</li>
                                            <li><i aria-hidden className="fab fa-php"></i> PHP</li>
                                            <li><i aria-hidden className="fab fa-html5"></i> HTML & CSS</li>
                                            <li><i aria-hidden className="fab fa-python"></i> Python</li>
                                            <li><i aria-hidden className="fab fa-node-js"></i> Node JS & Mongo DB</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="uk-width-1-2@m about-image uk-inline uk-visible@m" data-uk-scrollspy="cls:uk-animation-slide-right-small">
                                <img className="uk-position-center" src={profile} alt="Profile Pic" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About