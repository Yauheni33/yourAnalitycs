import React from "react";


class About extends React.Component {
    render() {
        return(
            <section id="about" className="about section" style={{marginBottom: "-20px"}}>
                <div className="container" style={{marginTop: "-50px"}}>
                    <h2 className="title text-center">Что такое yourAnalytics?</h2>
                    <p className="intro text-center">Наша платформа предназначена для Youtube-блогеров, как крупных(миллионников), так и небольших. Система, разработанная нами, анализирует Ваш канал по комментариям.</p>
                    <p className="intro text-center" style={{marginTop: "-40px"}}>Как это работает?</p>
                        <p className="intro text-center" style={{marginTop: "-45px"}}>Мы собираем комментарии с Ваших видеороликов, анализируем их путем сложных алгоритмов и выдаем полную и понятную статистику по каждому из Ваших видео.
                    </p>
                    <div className="row">
                        <div className="item col-md-4 col-sm-6 col-xs-12">
                            <div className="icon-holder">
                                <i className="fa fa-heart"></i>
                            </div>
                            <div className="content">
                                <h3 className="sub-title">Designed for developers</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                        <div className="item col-md-4 col-sm-6 col-xs-12">
                            <div className="icon-holder">
                                <i className="fa fa-clock-o"></i>
                            </div>
                            <div className="content">
                                <h3 className="sub-title">Time saver</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                        <div className="item col-md-4 col-sm-6 col-xs-12">
                            <div className="icon-holder">
                                <i className="fa fa-crosshairs"></i>
                            </div>
                            <div className="content">
                                <h3 className="sub-title">UX-centred</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                        <div className="clearfix visible-md"></div>    
                        <div className="item col-md-4 col-sm-6 col-xs-12">
                            <div className="icon-holder">
                                <i className="fa fa-tablet"></i>
                            </div>
                            <div className="content">
                                <h3 className="sub-title">Mobile-friendly</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                        <div className="item col-md-4 col-sm-6 col-xs-12">
                            <div className="icon-holder">
                                <i className="fa fa-code"></i>
                            </div>
                            <div className="content">
                                <h3 className="sub-title">Easy to customise</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>
                        <div className="item col-md-4 col-sm-6 col-xs-12">
                            <div className="icon-holder">
                                <i className="fa fa-coffee"></i>
                            </div>
                            <div className="content">
                                <h3 className="sub-title">LESS files included</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                            </div>
                        </div>             
                    </div>          
                </div>
            </section>
        )
    }
}

export default About;