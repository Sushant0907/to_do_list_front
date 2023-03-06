
import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import Register from './Register';
import List from './List';

import { BrowserRouter,Routes,Route } from 'react-router-dom';



  function App(){

    return(

        <BrowserRouter>

            <Routes>

                <Route path="/" element= {<Login />}></Route>
                <Route path="/register" element= {<Register />}></Route>
                <Route path="/list" element= {<List />}></Route>


            </Routes>




        </BrowserRouter>





    )





}










export default App;






































