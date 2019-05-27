import React from "react";

class Contact extends React.Component {
    render() {
        return(
            <section id="contact" className="contact section has-pattern">
                <div className="container">
                    <div className="contact-inner">
                        <h2 className="title  text-center">Contact</h2>
                        <p className="intro  text-center">I hope you find this Bootstrap template useful. <br />Feel free to get in touch if you have any questions or suggestions.</p>
                        <div className="author-message">                      
                            <div className="profile">
                            </div>
                            <div className="speech-bubble">
                                <h3 className="sub-title">Want to get more freebies in the future?</h3>
                                <p>I tweet about #UX and #webdev related resources/content at <a href="https://twitter.com/3rdwave_themes" target="_blank">@3rdwave_themes</a></p>
                                <p>If you like what I do, you can follow me on twitter and I will keep you informed about my next free template there :)</p>
                                <p><strong>[Tip for developers]:</strong> If you take on freelance work you can put a tailored message here about your availability to attract potential clients. Be creative and good luck!</p> 
                                <div className="source">
                                    <span className="name"><a href="https://twitter.com/3rdwave_themes" target="_blank">Xiaoying Riley</a></span>
                                    <br />
                                    <span className="title">UX/UI Designer</span>
                                </div>
                            </div>                       
                        </div>
                        <div className="clearfix"></div>
                        <div className="info text-center">
                            <h4 className="sub-title">Get Connected</h4>
                            <ul className="social-icons list-inline">
                                <li><a href="https://twitter.com/3rdwave_themes" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.facebook.com/3rdwavethemes" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/xiaoying"><i className="fa fa-linkedin"></i></a></li>
                                <li><a href="http://instagram.com/xyriley"><i className="fa fa-instagram"></i></a></li>  
                                <li><a href="https://dribbble.com/Xiaoying"><i className="fa fa-dribbble"></i></a></li>   
                                <li className="last"><a href="mailto:hello@3rdwavemedia.com"><i className="fa fa-envelope"></i></a></li>              
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        )
    }
}

export default Contact;