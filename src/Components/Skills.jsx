import React, { Component } from 'react'

class Skills extends Component {
    render() {
        return (
            <section className="skill-section" id="skill-section">
                <div className="uk-flex-center" data-uk-grid>
                    <div className="uk-width-3-4@m">
                        <div className="" data-uk-grid>
                            <div className="uk-width-1-3@m">
                                <div className="idl-card">
                                    <a href="https://internetdefenseleague.org"><img src="https://internetdefenseleague.org/images/badges/final/shield_badge.png" alt="Member of The Internet Defense League"/></a>
                                </div>
                            </div>
                            <div className="uk-width-2-3@m">
                                <h3 className="uk-heading-line about-head"><span><label>03.</label> My Top Skills</span></h3>
                                <div className="skillset" data-uk-grid>
                                    <div className="uk-width-1-2@m">
                                        <div className="card">
                                            <p><i aria-hidden className="fas fa-globe"></i>Web Designing</p>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-2@m">
                                        <div className="card">
                                            <p><i aria-hidden className="fab fa-aws"></i>Web Development</p>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-2@m">
                                        <div className="card">
                                            <p><i aria-hidden className="fas fa-blog"></i>Blogging</p>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-2@m">
                                        <div className="card">
                                            <p><i aria-hidden className="fab fa-laravel"></i>PHP & Laravel</p>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-2@m">
                                        <div className="card">
                                            <p><i aria-hidden className="fab fa-searchengin"></i>SEO</p>
                                        </div>
                                    </div>
                                    <div className="uk-width-1-2@m">
                                        <div className="card">
                                            <p><i aria-hidden className="fas fa-globe"></i>Website Maintainance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills