import React from 'react';
import Header from "./Header"
import Footer from "./Footer"
import Input from "./Input"
import Button from "./Button"
// import Header_log from './Header_log';



function List(){



    return(<div className="whole">

        <Header />

        <Button type="submit" lable="Logout"  class="log"/>


        <form className="new">

            <div className='notes'>
                <input type="checkbox" class= "listinput"></input>
                <p>first note</p>
            </div>

            <div className='notes'>
                <input type="checkbox" class= "listinput"></input>
                <p>first note</p>
            </div>
            
            <div className='notes'>
                <input type="checkbox" class= "listinput"></input>
                <p>first note</p>
            </div>
            
            <div className='notes'>
            
                <input type="checkbox" class= "listinput"></input>
                <p>first note </p>
            </div>
            
            <div className='notes'>
                <input type="checkbox" class= "listinput"></input>
                <p>first note</p>
            </div>


        </form>


        <form>

            <Input type="text" name="addnote" placeholder="Write Note" class="innote" />

            <Button type="submit" lable="Add Note" />


        </form>















    </div>);













}















export default List;
