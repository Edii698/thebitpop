import React from "react";
import { Footer } from 'react-materialize'
import "./Footer.css"

const PgFooter = () => (
  <Footer copyrights="© 2018 BitPop.me"
   
    links={
      <ul>
        <li><a className="grey-text text-lighten-3" href="#!">Home</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">About</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Welcome</a></li>
        <li><a className="grey-text text-lighten-3" href="#!">Preview</a></li>
      </ul>
    }
    className='#ff6f00 amber darken-4' id="pg-footer"
  >
    <h5 className="white-text">Follow us, like us, and share</h5>
    <img src={require('../../images/templates/social/social.png')} className="social" alt=""/>
  </Footer>
);

export default PgFooter;
