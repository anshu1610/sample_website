import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {

    state = {
        defaultCredential: {
            username: "gwl",
            password: "gwl@123",
        },
        userCredential: {
            username: null,
            password: null,
        }
    };

    handleChange = (value, key) => {
        const { userCredential } = this.state;
        this.setState({
            ...this.state,
            userCredential: { ...userCredential, [key]: value }
        });
    };

    handler = () => {
        const { defaultCredential, userCredential } = this.state;
        const {history} =this.props

        console.log('defaultCredential');
        console.log('userCredential')
        if (!((defaultCredential.username === userCredential.username) && (defaultCredential.password === userCredential.password))) {
            alert("Incorrect Login Details!");
        }
        else {
            alert("Login Details Correct!")
            history.push('/dashboard')
        }
    };
    render() {
        const { userCredential = {} } = this.state;
        const { username, password } = userCredential;
        console.log(userCredential);
        const { handleChange , handler } = this;
        return (
            <div>
                <form onSubmit={handler}>
                    <fieldset>
                        <legend>Login Details:</legend>
                        <label>Enter User Name: </label><br />
                        <input
                            onChange={e => {
                                handleChange(e.target.value, "username");
                            }}
                            type="text" value={username} name="username" placeholder="User Name" required /><br />
                        <label>Enter Password: </label><br />
                        <input
                            onChange={e => {
                                handleChange(e.target.value, "password");
                            }}
                            type="password" value={password} name="password" placeholder="Password" required /><br />
                        <input type="submit" name="submit" />
                        {/* <Link to="/" >
                            <button type="button">Submit</button>
                        </Link> */}
                        <Link to="/" >
                            <button type="button">Go Back</button>
                        </Link>
                        <Link to = "/registration">
                            <button type="button">Register Now!</button>
                        </Link>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Login;