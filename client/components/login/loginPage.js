import React from 'react';
import LoginForm from './loginForm';
//import { connect } from 'react-redux';

class loginPage extends React.Component {
    render() {
        return (
            <div className="row" >
                <div className="col-md-4 col-md-offset-4">
                    <LoginForm />
                </div>
            </div>
        );
    }
}

export default loginPage;
//export default connect(null, {})(loginPage);