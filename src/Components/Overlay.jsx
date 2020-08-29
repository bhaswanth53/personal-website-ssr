import React, { Component } from 'react'
import Logo from '../images/logo-pic.png'

class Overlay extends Component {
    render() {
        return (
            <div id="overlay" className="uk-inline">
                <div className="uk-position-center uk-text-center">
                    <img src={Logo} alt="Logo" /><br/>
                    <div className="lds-ellipsis uk-align-center"><div></div><div></div><div></div><div></div></div>
                </div>
            </div>
        )
    }
}

export default Overlay