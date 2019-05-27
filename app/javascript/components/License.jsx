import React from "react";

class License extends React.Component {
    render() {
        return(
            <section id="license" className="license section">
                <div className="container">
                    <div className="license-inner">
                    <h2 className="title text-center">License</h2>
                        <div className="info">
                            <p>This Bootstrap theme is made by UX designer <a href="https://www.linkedin.com/in/xiaoying" target="_blank">Xiaoying Riley</a> at 3rd Wave Media for developers and is <strong>100% FREE</strong> under the <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons Attribution 3.0 License (CC BY 3.0)</a></p>
                            <p><strong>[Tip for developers]:</strong> If your project is open source, you might want to put a <a href="https://www.paypal.com/us/cgi-bin/?cmd=_donate-intro-outside" target="_blank">PayPal "Donate" button</a> below so your users can express their gratitude. If your project is commercial, you can put a <a href="https://www.paypal.com/us/cgi-bin/webscr?cmd=_singleitem-intro-outside" target="_blank">PayPal "Buy Now" button</a> instead.</p>
                        </div>
                        <div className="cta-container">
                            <div className="speech-bubble">                    
                                <p className="intro">If you are feeling generous and want to show your support to Xiaoying, you can buy her a beer or coffee via the PayPal donate button below. :)</p>
                                <div className="icon-holder  text-center"><i className="fa fa-smile-o"></i></div>
                            </div>
                            <div className="btn-container  text-center">
                                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                <input type="hidden" name="cmd" value="_s-xclick"/>
                                <input type="hidden" name="hosted_button_id" value="Y46LJNXGAVVWW"/>
                                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
                                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1"/>
                                </form>               
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default License;