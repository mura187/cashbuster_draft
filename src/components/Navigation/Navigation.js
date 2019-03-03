import React from 'react';
import {NavLink } from "react-router-dom";

const Navigation = () =>{
    return(
        <div>
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/clients'> Clients </NavLink> 
            <NavLink to='/orders'> Orders </NavLink>
        </div>    
    );
};


export default Navigation;