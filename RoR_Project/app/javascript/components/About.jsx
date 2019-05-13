import React from "react";
import { BrowserRouter as Link } from 'react-router-dom'


class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = { window: this.getAbout() }
    }

    getAbout() {
        return(
            <h2>About</h2>
        )
    }

    render() {
        console.log(this.props)
        return(
            <div>
                { this.props.updateWindow(this.state.window) }
            </div>
        )
    }
}

export default About;