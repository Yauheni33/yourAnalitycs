import React from "react";

class FormFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    <input name="fio" type="text" className="form-control" id="inputPassword2" placeholder="ФИО"/>
                    <input name="channel" type="text" className="form-control" id="inputPassword2" placeholder="Назвние канал"/>
                    <input name="email" type="email" className="form-control" id="inputPassword2" placeholder="Email"/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Отправить на обработку</button>
            </form>
        )
    }    
}

export default FormFeedback;
