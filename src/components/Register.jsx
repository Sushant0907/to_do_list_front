import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Input from "./Input"
import Button from "./Button"
import {Link} from "react-router-dom"




function Register(){



    return(<div className="whole">

        <Header />

        <div className = "form">
            <h1>Register</h1>
            <form>

                <Input type= "text" name="username" placeholder="Enter UserName" />
                <Input type= "password" name="pass" placeholder="Password" />
                <Input type= "password" name="cpass" placeholder="Confirm Password" />
                <Button type= "submit"  lable = "Register" />
                
            </form>


            <Link to="/">

                <h3>Or Login</h3>


            </Link>
        </div>
        

        <Footer />


    </div>)




}















export default Register;
