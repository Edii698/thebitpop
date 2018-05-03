import React from "react";
import "./Header.css";
import {Button, Icon } from 'react-materialize'

const Header = () =>(
    <div>
        <div className='' s={12}>
            <div className="center-align" id="pg-header">
                <div id="header-info">
                    <h2 className="slide-info z-depth-4">Create Your Character Now!</h2>
                    <Button waves='light' className="#03a9f4 light-blue" id="createBtn">Get Started!<Icon left>brush</Icon></Button> 
                </div>     
            </div>
        </div>
        <div className="#1de9b6 teal accent-3 center-align" id="hm-bar">
            <h3 className="title-txt">Your Art, Fast, Easy, Fun!</h3>
        </div>
    </div>    
);

export default Header;