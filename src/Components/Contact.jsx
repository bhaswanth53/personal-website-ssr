import React, { Component } from 'react'

class Contact extends Component {
    render() {
        return (
            <section className="contact-section" id="contact-section" data-uk-scrollspy="cls:uk-animation-scale-up">
                <div className="uk-inline uk-width-1-1 sub-div uk-visible@m">
                    <div className="uk-flex-center" data-uk-grid>
                        <div className="uk-width-3-4@m">
                            <div className="uk-position-center uk-text-center">
                                <p className="head-label">05. What's Next?</p>
                                <h1>Get In Touch</h1>
                                <p className="text uk-width-1-2@m uk-align-center uk-visible@m">For freelance or full-time opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to get back to you!</p>
                                <table className="uk-table uk-width-1-2@m uk-align-center uk-table-middle">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span><i aria-hidden className="far fa-envelope"></i></span> bhaswanth1997@gmail.com
                                            </td>
                                            <td>
                                                <span><i aria-hidden className="fas fa-phone"></i></span> +91-9985814059, +91-8919723239
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="uk-hidden@m uk-margin-top">
                    <p className="head-label">04. What's Next?</p>
                    <h1>Get In Touch</h1>
                    <div className="m-div">
                        <p className="text">For freelance or full-time opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to get back to you!</p>
                        <table className="uk-table uk-table-middle">
                            <tbody>
                                <tr>
                                    <td><span><i aria-hidden className="far fa-envelope"></i></span> </td>
                                    <td>
                                        bhaswanth1997@gmail.com
                                    </td>
                                </tr>
                                <tr>
                                    <td><span><i aria-hidden className="fas fa-phone"></i></span> </td>
                                    <td>
                                        +91-9985814059, <br /> +91-8919723239
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        )
    }
}

export default  Contact