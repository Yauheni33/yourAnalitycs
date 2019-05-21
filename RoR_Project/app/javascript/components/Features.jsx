import React from "react";

class Features extends React.Component {
    render() {
        return(
            <section id="features" className="features section">
                <div className="container text-center">
                    <h2 className="title">Features</h2>
                    <ul className="feature-list list-unstyled">
                        <li><i className="fa fa-check"></i> Fully responsive</li>
                        <li><i className="fa fa-check"></i> HTML5 + CSS3</li>
                        <li><i className="fa fa-check"></i> Built on <a href="http://getbootstrap.com/" target="_blank">Bootstrap 3.3</a></li>
                        <li><i className="fa fa-check"></i> 400+ FontAwesome icons</li>
                        <li><i className="fa fa-check"></i> 4 colour schemes</li>
                        <li><i className="fa fa-check"></i> LESS files included</li>
                        <li><i className="fa fa-check"></i> Compatible with all modern browsers</li>
                    </ul>
                </div>
            </section>

        )
    }
}

export default Features;