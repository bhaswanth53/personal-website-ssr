import React, { Component } from 'react'
import projexino from '../images/projects/projexino.png'
import OnlineTution from '../images/projects/online-tution.png'
import UniversalSummits from '../images/projects/universal-summits.png'
import Dusll from '../images/projects/dusll.png'
import MovieProduction from '../images/projects/movie-production.png'

class Freelance extends Component {
    render() {
        return(
            <div className="freelance-section">
                {/* Projexino Website */}
                <div className="project" data-uk-grid>
                    <div className="uk-width-1-2@m">
                        <div className="card" style={{ backgroundImage: `url(${projexino})` }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@m">
                        <div className="uk-padding">
                            <p className="label uk-text-right@m">Company Project</p>
                            <p className="title uk-text-right@m">Projexino Website</p>
                            <p className="description uk-text-right@m">
                                Official website of Projexino Web Technologies.
                            </p>
                            <div className="technologies uk-text-right@m">
                                <span className="uk-label">Bootstrap</span>
                                <span className="uk-label">YNOTPHP</span>
                                <span className="uk-label">Javascript</span>
                                <span className="uk-label">JQuery</span>
                            </div>
                            <div className="actions uk-text-right@m">
                                <a href="https://www.projexino.com/" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fas fa-external-link-alt"></i> Open</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Online Tution */}
                <div className="project" data-uk-grid>
                    <div className="uk-width-1-2@m uk-hidden@m">
                        <div className="card" style={{ backgroundImage: `url(${OnlineTution})` }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@m">
                        <div className="uk-padding">
                            <p className="label">Freelance Project</p>
                            <p className="title">Online Tution Mauritius</p>
                            <p className="description">
                                An education website for online training.
                            </p>
                            <div className="technologies">
                                <span className="uk-label">Bootstrap</span>
                                <span className="uk-label">UIKIT</span>
                                <span className="uk-label">Javascript</span>
                                <span className="uk-label">PHP</span>
                            </div>
                            <div className="actions">
                                <a href="https://onlinetuition.mu/" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fas fa-external-link-alt"></i> Open</a>
                            </div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@m uk-visible@m">
                        <div className="card" style={{ backgroundImage: `url(${OnlineTution})` }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>

                {/* Universal summits */}
                <div className="project" data-uk-grid>
                    <div className="uk-width-1-2@m">
                        <div className="card" style={{ backgroundImage: `url(${UniversalSummits})` }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@m">
                        <div className="uk-padding">
                            <p className="label uk-text-right@m">Company Project</p>
                            <p className="title uk-text-right@m">Universal Summits</p>
                            <p className="description uk-text-right@m">
                                Official website of Universal Summits.
                            </p>
                            <div className="technologies uk-text-right@m">
                                <span className="uk-label">Bootstrap</span>
                                <span className="uk-label">PHP</span>
                                <span className="uk-label">Javascript</span>
                                <span className="uk-label">Laravel</span>
                            </div>
                            <div className="actions uk-text-right@m">
                                <a href="https://www.universalsummits.com/" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fas fa-external-link-alt"></i> Open</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Dusll */}
                <div className="project" data-uk-grid>
                    <div className="uk-width-1-2@m uk-hidden@m">
                        <div className="card" style={{ backgroundImage: `url(${Dusll})` }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@m">
                        <div className="uk-padding">
                            <p className="label">Freelance Project</p>
                            <p className="title">Dusll</p>
                            <p className="description">
                                Pre mobile-application release landing page for Dusll.
                            </p>
                            <div className="technologies">
                                <span className="uk-label">UIKIT</span>
                                <span className="uk-label">Javascript</span>
                                <span className="uk-label">PHP</span>
                                <span className="uk-label">Laravel</span>
                            </div>
                            {/* <div className="actions">
                                <a href="https://onlinetuition.mu/" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fas fa-external-link-alt"></i> Open</a>
                            </div> */}
                        </div>
                    </div>
                    <div className="uk-width-1-2@m uk-visible@m">
                        <div className="card" style={{ backgroundImage: `url(${Dusll})` }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                </div>

                {/* Movie productions */}
                <div className="project" data-uk-grid>
                    <div className="uk-width-1-2@m">
                        <div className="card" style={{ backgroundImage: `url(${MovieProduction})` }}>
                            <div className="overlay"></div>
                        </div>
                    </div>
                    <div className="uk-width-1-2@m">
                        <div className="uk-padding">
                            <p className="label uk-text-right@m">Company Project</p>
                            <p className="title uk-text-right@m">Melodee Production</p>
                            <p className="description uk-text-right@m">
                                Official website of Melodee Production.
                            </p>
                            <div className="technologies uk-text-right@m">
                                <span className="uk-label">Bootstrap</span>
                                <span className="uk-label">PHP</span>
                                <span className="uk-label">Javascript</span>
                                <span className="uk-label">JQuery</span>
                            </div>
                            <div className="actions uk-text-right@m">
                                <a href="https://melodeeproduction.net/" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fas fa-external-link-alt"></i> Open</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Freelance