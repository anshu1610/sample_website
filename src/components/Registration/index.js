import React, { Component } from "react";
import './index.css'

class Registration extends Component {

    state = {
        defaultCredential: {
            fname: "JP",
            sname: "Morgan",
            email: "jpmorgan@jpm.com",
            password: "jpm@123",
            dob: "2000-4 -16",
            gender: "Male",
        },
        userCredential: {
            fname: null,
            sname: null,
            email: null,
            password: null,
            dob: null,
            gender: null,
        }
    };

    handleChange = (value, key) => {
        const { userCredential } = this.state;
        this.setState({
            ...this.state,
            userCredential: { ...userCredential, [key]: value }
        });
    };

    // handleValidation = () => {
    //     const { userCredential } = this.state;
    //     console.log(userCredential);

    //     if((userCredential.fname === "") || (userCredential.fname === null )) {
    //         alert("Invalid User First Name");
    //     }
    //     if((userCredential.sname === "") || (userCredential.sname === null )) {
    //         alert("Invalid SurName");
    //     }
    //     if((userCredential.email === "") || (userCredential.email === null )) {
    //         alert("Invalid Email or Mobile");
    //     }
    //     if((userCredential.password === "") || (userCredential.password === null )) {
    //         alert("Invalid Password");
    //     }
    //     if((userCredential.dob === "") || (userCredential.dob === null )) {
    //         alert("Invalid Date of Birth");
    //     }
    // };
    formHandler = (e) => {
        e.preventDefault();
        const { userCredential } = this.state;
        const {history} = this.props;

        if (userCredential.fname && userCredential.sname && userCredential.email
             && userCredential.password && userCredential.dob && userCredential.gender) {
            alert("Success!");
            history.push('/dashboard')
        }
        else {
            alert("Must fill all the fields!")
        }
    };

    render() {
        const { userCredential = {} } = this.state;
        const { fname, sname, email, password, dob, gender } = userCredential;
        console.log(userCredential);
        const { handleChange } = this;
        return (
            <div className="main-div" style={{ display: "flex" }}>
                <div style={{ width: "30%", /*backgroundColor: "LightBlue"*/ }}></div>
                <div style={{ width: "40%", /*backgroundColor: "Tomato" */ }}>
                    <div style={{marginTop:'150px'}}>
                        <h1>Create an account</h1>
                        <p>It's quick and easy!</p>
                    </div>
                    <form onSubmit={(e) => this.formHandler(e)}>
                        <fieldset>
                            <legend>Enter Your Details:</legend>
                            <div className={"grid-container"}>
                                <div className={"fname"}>
                                    <input
                                        onChange={e => {
                                            //console.log(e.target.value);
                                            handleChange(e.target.value, "fname");
                                        }}
                                        value={fname} name="fname" placeholder="First Name" size="28"
                                        pattern="[a-zA-Z ].{3,}" title="Please enter a valid First Name" required />
                                </div>
                                <div className={"sname"}>
                                    <input
                                        onChange={e => {
                                            handleChange(e.target.value, "sname");
                                        }}
                                        value={sname} name="sname" placeholder="SurName" size="28"
                                        pattern="[a-zA-Z ].{3,}" title="Please enter a valid Second Name" required />
                                </div>
                                <div className="email">
                                    <input type = "email"
                                        onChange={e => {
                                            handleChange(e.target.value, "email");
                                        }}
                                        value={email} name="email" placeholder="Mobile number or email address" size="65"
                                        /*pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" */
                                         title="Please enter a valid Email ID or Phone Number" required /*style={{ width: "76%" }}*/ />
                                </div>
                                <div className={"password"}>
                                    <input type="password"
                                        onChange={e => {
                                            handleChange(e.target.value, "password");
                                        }}
                                        value={password} name="password" placeholder="New Password" size="65"
                                        pattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title ="Please enter a valid Password" required />
                                </div>
                                <div className={"dob"}>
                                    <label>Date of Birth:</label>
                                    <input type="date"
                                        onChange={e => {
                                            handleChange(e.target.value, "dob");
                                        }}
                                        value={dob} name="date" min="1950-1-1" max="2020-1-1" placeholder="Date of Birth"
                                        required />
                                </div>
                                
                                <div style={{ display: "flex" }} className={"gender"}>
                                    <label>Gender:</label> <br />
                                    <input type="radio" value="female" name="gender"
                                        onChange={e => {
                                            handleChange(e.target.value, "gender");
                                        }} />Female
                                    <input type="radio" value="male" name="gender"
                                        onChange={e => {
                                            handleChange(e.target.value, "gender");
                                        }} />Male
                                    <input type="radio" value="custom" name="gender"
                                    onChange = { e => {
                                        handleChange(e.target.value, "gender");
                                    }} />Custom
                                </div>
                                <div className={"submit-button"}>
                                    <button type="submit" name="submit" /*onClick={this.handleValidation}*/
                                        style={{ width: "100px", height: "25px" }}>Submit</button>
                                </div>
                                {/* <div className={"item8"}>item8</div>
                                <div className={"item9"}>item9</div>
                                <div className={"item10"}>item10</div> */}
                            </div>
                        </fieldset>
                    </form>
                </div>
                <div style={{ width: "30%", /*backgroundColor: "LightBlue" */ }}></div>
            </div>
        )
    }
}

export default Registration;