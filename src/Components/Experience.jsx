import React, { Component } from 'react'

class Experience extends Component {
    render() {
        return(
            <section className="experience-section" id="experience-section">
                <div className="uk-flex-center" data-uk-grid>
                    <div className="uk-width-3-4@m">
                        <h3 className="uk-heading-line about-head"><span><label>02.</label> Where I've Worked</span></h3>
                        <br />
                        <div className="uk-width-2-3@m uk-align-center">
                            <div data-uk-grid>
                                <div className="uk-width-1-3@m">
                                    <div className="etabs">
                                        <ul className="uk-tab-right" data-uk-tab>
                                            <li className="uk-active"><a href="#">Projexino Web Technologies</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="uk-width-2-3@m">
                                    <div className="exp">
                                        <p className="title">Full Stack Developer <span>@Projexino</span></p>
                                        <p className="label">May 2018  -  Present</p>
                                        <ul className="roles">
                                            <li>
                                                Write modern, performant, maintainable code for a diverse array of client and internal projects. <br/>
                                            </li>
                                            <li>
                                                Work with a variety of different languages, platforms and frameworks such as JavaScript, React, Vue, Node JS, PHP, Laravel etc. <br/>
                                            </li>
                                            <li>
                                                Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis
                                            </li>
                                        </ul>
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

export default Experience