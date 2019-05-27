import React from 'react';


class Footer extends React.Component {
    render() {
        return(
            <footer className="footer" style={{position: "fixed", bottom: "0", left: "0", right: "0"}}>
                <div className="container text-center">
                    <small className="copyright">yourAnalitycs is <a href="https://github.com/Yauheni33/RoR" target="_blank">open source platform</a> for developers</small>
                </div>
            </footer>
        )
    }
}

export default Footer;