import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="uk-padding uk-text-center">
                    <ul className="uk-hidden@m">
                        <li><a href="https://www.facebook.com/bhaswanth.kumar.9" target="_blank"rel="noopener noreferrer"><i aria-hidden className="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.linkedin.com/in/bhaswanthchittanoor" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/bhaswanth53" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-github"></i></a></li>
                        <li><a href="https://codepen.io/bhaswanth_chiruthanuru" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-codepen"></i></a></li>
                        <li><a href="https://www.instagram.com/its_me_man_of_attitude/?hl=en" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/bhaswanth4?lang=en" target="_blank" rel="noopener noreferrer"><i aria-hidden className="fab fa-twitter"></i></a></li>
                        <li className="line-li"><a href="#" className="line"></a></li>
                    </ul>
                    <p className="text">Designed & Built by Bhaswanth Chiruthanuru</p>
                </div>
            </footer>
        )
    }
}

export default Footer