import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Input from "./Input"
import Button from "./Button"
import {Link} from "react-router-dom"




function Login(){



    return(<div className="whole">

        <Header />

        <div className = "form">




            <h1>Login</h1>


        
        
            <form>

                <Input type= "text" name="username" placeholder="Enter UserName" />
                <Input type= "password" name="pass" placeholder="Password" />
                <Button type= "submit"  lable = "Login" />
                
            </form>





            <Link to = "/register">


                <h3>Or Register</h3>

            </Link>











        </div>
        

        <Footer />


    </div>)




}















export default Login;
