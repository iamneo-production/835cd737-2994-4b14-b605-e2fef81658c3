import React, { useState } from "react";
import { Link} from "react-router-dom";

function SignupForm() {
    
    const [username, setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    ;

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (mobileNumber.length === 10) {
            //alert("Phone number");

        }
        else {
            alert("Ivalid Mobile number");
        }
    }

    // const Submitvalue = (e) => {
    //     // const history = useHistory();
    //     // const navigateTo = () => history.push('/Home');
    // }



    return (
        <>
            
               
                <form onSubmit={handleSubmit}>
                <div className="form-body">
                <h2> Signup</h2>
                <div className="form-group">
                    <label htmlFor="username">Enter Username:</label>
                    <input type="text"  name="name" id="username" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label  htmlFor="email">Enter Email:</label>
                    <input type="email"  name="email" id="email"onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label  htmlFor="mobileNumber">Enter Mobilenumber:</label>
                    <input type="text" name="mobileNumber" id="mobileNumber"onChange={e => setMobileNumber(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label  htmlFor="password">Password:</label>
                    <input type="password"  id="password" name="password"onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label  htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password"  id="confirmPassword" name="password" onChange={e => setConfirmPassword(e.target.value)} />
                </div>
               <input type="submit" value="SUBMIT"></input>
               <div className="footer">
               <Link to="/LoginForm">Already a user?</Link>
               </div>
                </div>
               
                </form>
                
            
        </>
    );
}

export default SignupForm;