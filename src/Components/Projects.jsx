import React, { Component } from 'react'
import Featured from './Featured'
import Freelance from './Freelance'

class Projects extends Component {
    render() {
        return(
            <section className="projects-section" id="projects-section">
                <div className="uk-flex-center" data-uk-grid>
                    <div className="uk-width-3-4@m">
                        <h3 className="uk-heading-line about-head"><span><label>04.</label> Some Things I've Worked On</span></h3>
                        <br />
                        <Freelance />
                        <Featured />
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects