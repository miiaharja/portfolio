import React, { Component } from 'react';
import axios from 'axios';

import { withLocalize } from "react-localize-redux";
import globalTranslations from "../translations/texts.json";
import { Translate } from "react-localize-redux";

/*axios.create({
    baseURL: 'https://portfolio-miiaharja.firebaseio.com/'
});*/

const validate = (name, email, subject) => {
    // we are going to store errors for all fields
    // in a signle array
    const errors = [];
  
    if (name.length === 0) {
      errors.push("Name can't be empty");
    }
    if (email.split('').filter(x => x === '@').length !== 1) {
      errors.push("Email should contain a @");
    }
    if (subject.length === 0) {
        errors.push("Subject can't be empty");
    }
  
    return errors;
}

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state= {
            name: '',
            email: '',
            subject: '',
            message: '',

            errors: []
        };
    
        this.props.addTranslation(globalTranslations);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = this.state;

        const errors = validate(name, email, subject, message);
            if (errors.length > 0) {
            this.setState({ errors });
            return;
        }

        const form = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };
        axios.post('https://portfolio-miiaharja.firebaseio.com/contact.json', form)
        .then(response => console.log(response))
        .catch(error => console.log(error));

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    render() {
        return (
        <div>
            <section className="section-contact" id="section-contact">
                <div className="row">
                    <div className="contact">
                        <div className="contact__form">
                            <form action="#" className="form" onSubmit={this.handleSubmit}>
                                <div className="u-margin-bottom-medium">
                                        <h2 className="heading-secondary">
                                            <Translate id="contact__h2"/>
                                        </h2>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Nimi" id="name" 
                                        value={this.state.name} 
                                        onChange={(event) => this.setState({name: event.target.value})}
                                        required />
                                    <label for="name" className="form__label"><Translate id="contact__input-1"/></label>
                                </div>

                                <div className="form__group">
                                    <input type="email" className="form__input" placeholder="Email" id="email"
                                        value={this.state.email}
                                        onChange={(event) => this.setState({email: event.target.value})}
                                        required />
                                    <label for="email" className="form__label"><Translate id="contact__input-2"/></label>
                                </div>

                                <div className="form__group">
                                    <input type="text" className="form__input" placeholder="Aihe" id="subject"
                                        value={this.state.subject}
                                        onChange={(event) => this.setState({subject: event.target.value})}
                                        required />
                                    <label for="subject" className="form__label"><Translate id="contact__input-3"/></label>
                                </div>

                                <div className="form__group">
                                    <textarea name="message" className="form__textarea" placeholder="Viesti" form="form_id" id="message"
                                    value={this.state.message}
                                    onChange={(event) => this.setState({message: event.target.value})}></textarea>
                                    <label for="message" className="form__label"><Translate id="contact__input-4"/></label>
                                </div>


                                <div className="form__group">
                                    <button className="btn btn--green" type="submit"><Translate id="contact__button"/></button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        );
    }
}

export default withLocalize(Contact);