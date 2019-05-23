import React from "react";
import axios from 'axios';

class FormFeedback extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            surname: '',
            channel: '',
            email: ''
        }
        this.changeName = this.changeName.bind(this);
        this.changeSurname = this.changeSurname.bind(this);
        this.changeChannel = this.changeChannel.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        axios.post('/api/feedback', { 
            feedback: {
                name: this.state.name,
                surname: this.state.surname,
                name_channel: this.state.channel,
                email: this.state.email 
            }
        })
        .then(function(response) {
            alert('Good')
        })
        .catch(function(error) {
            alert('Bad')
        })
    }

    changeName(event) {
        this.setState({name: event.target.value})
    }

    changeSurname(event) {
        this.setState({surname: event.target.value})
    }

    changeChannel(event) {
        this.setState({channel: event.target.value})
    }

    changeEmail(event) {
        this.setState({email: event.target.value})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group mx-sm-3 mb-2">
                    <input name="name" type="text" className="form-control" placeholder="Имя" value={this.state.name} onChange={this.changeName}/>
                    <input name="surname" type="text" className="form-control" placeholder="Фамилия" value={this.state.surname} onChange={this.changeSurname}/>
                    <input name="channel" type="text" className="form-control" placeholder="Назвние канал" value={this.state.channel} onChange={this.changeChannel}/>
                    <input name="email" type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.changeEmail}/>
                </div>
                <button type="submit" className="btn btn-primary mb-2">Отправить на обработку</button>
            </form>
        )
    }    
}

export default FormFeedback;
