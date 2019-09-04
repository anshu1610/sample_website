import React from "react";
import {Link} from "react-router-dom";

class Login extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Login Details</legend>
                        Enter ID: <br/>
                        <input type="text" name="login_details"/><br/>
                        Password: <br/>
                        <input type="text" name="password"/>
                        <Link to = "/core" >
                            <button type="button">Submit</button>
                        </Link> 
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Login;