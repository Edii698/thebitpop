import React from "react";
import "./Header.css";
import {Button, Icon } from 'react-materialize'

const Header = () =>(
    <div>
        <div className='' s={12}>
            <div className="center-align" id="pg-header">
                {/* <div id="header-info">
                    <h2 className="slide-info">Create Your Character Now!</h2>
                    <Button waves='light' className="#03a9f4 light-blue" id="createBtn">Get Started!<Icon left>brush</Icon></Button> 
                </div>      */}
            </div>
        </div>
        <div className="#00bfa5 teal accent-4 center-align" id="hm-bar">
            <h3 className="slide-info">Create Your Character Now!</h3>
            <h3 className="title-txt">Your Art, Fast, Easy, Fun</h3>
            <div className="hm-copy">
            <p>Create avatars of yourself or your friends and family. Preview your creation on three different products we offer. </p>
            <p>Creating your avatar is easy and fun.</p>
            <p>See your new avatar in AR by clicking the "Room View" button</p>
            </div>
        </div>
    </div>    
);

export default Header;