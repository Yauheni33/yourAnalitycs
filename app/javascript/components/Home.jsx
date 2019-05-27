import React from "react";

class Home extends React.Component {
    render() {
        return(
            <section id="promo" className="promo section offset-header">
                <div className="container text-center">
                    <h2 className="title">your<span className="highlight">Analytics</span></h2>
                    <p className="intro">Анализируем ваш Youtube-канал</p>
                    <div className="btns">
                        <a className="btn btn-cta-secondary" href="http://themes.3rdwavemedia.com/" target="_blank">Demo</a>
                        <a className="btn btn-cta-primary" href="http://themes.3rdwavemedia.com/website-templates/devaid-free-bootstrap-theme-developers/" target="_blank">Download</a>
                    </div>
                    <ul className="meta list-inline">
                        <li><a href="https://github.com/Yauheni33/RoR" target="_blank">View on GitHub</a></li>
                        <li>Created by: <a href="https://www.linkedin.com/in/yauheni-busko-aa679b151/" target="_blank">Yauheni Busko</a></li>
                    </ul>
                </div>
                <div className="social-media" style={{marginTop: "5px"}}>
                </div>
            </section>
        )
    }
}

export default Home;