import React from 'react';
import TextFieldGroup from '../common/textFieldGroup';
import classnames from 'classnames';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: '',
            isLoading: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) { }

    render() {
        const { errors } = this.state;
        return (
            <form onSubmit={this.onsubmit}>
                <h1>Iniciar Session</h1>
                <TextFieldGroup
                    error={errors.username}
                    value={this.state.username}
                    field="username"
                    label="Nombre de usuario"
                    onChange={this.onChange}
                />
                <TextFieldGroup
                    error={errors.password}
                    value={this.state.password}
                    field="password"
                    type="password"
                    label="Contraseña"
                    onChange={this.onChange}
                />
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                        Iniciar
                    </button>
                </div>
            </form>
        );
    }
}

export default LoginForm