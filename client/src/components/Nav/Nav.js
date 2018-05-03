import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { Navbar, Modal, NavItem, Row, Button, Input } from 'react-materialize'
import API from '../../utils/API'
// import AuthService from "../../components/AuthService"

class Nav extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  // Auth = new AuthService();

  // componentWillMount() {
  //   if (this.Auth.loggedIn())
  //     this.props.history.replace('/saved');
  // }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    
    if (this.state.email && this.state.password) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      })
        .then(res => alert("Thanks for signing up"))
        .catch(err => console.log(err));
    }
  };

  handleAuthSubmit = e => {
    e.preventDefault();
    if (this.state.email && this.state.password) {
      API.userAuth({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.props.replace('/saved'))
        .catch(err => console.log(err));
    }

    // this.Auth.login(this.state.email, this.state.password)
    //   .then(res => {
    //     this.props.history.replace('/saved');
    //   })
    //   .catch(err => {
    //     alert(err);
    //   })
  };

  render () {
    return (
      <div className="navbar-fixed">
          <Navbar brand='BitPop.me!' className="#03a9f4 light-blue">
                  <Modal
                    header='Sign in'
                    fixedFooter
                    trigger={<NavItem className="right" onClick={() => console.log('test click')}>Get Started</NavItem>}>
                      <Row>
                          <form>
                            <Input placeholder="Name@email.com" s={12} label="Email" type="email" value={this.state.email} onChange={this.handleInputChange} name="email" />
                            <Input type="Password" label="password" s={12} value={this.state.password} onChange={this.handleInputChange} name="password" />
                            <Link to="/saved">
                              <Button
                                waves='light'
                                className="#03a9f4 light-blue modal-close"
                                typae="button"
                                
                              >
                                Submit
                              </Button>
                            </Link>
                          </form>  
                      </Row>
                  </Modal>
                
                  <Modal
                    header='Sign up'
                    fixedFooter
                    trigger={<NavItem className="right" href='components.html'>Sign Up</NavItem>}>
                    <Row>
                      <form>
                        <Input s={6} label="First Name" value={this.state.firstName} onChange={this.handleInputChange} name="firstName" />
                        <Input s={6} label="Last Name" value={this.state.lastName} onChange={this.handleInputChange} name="lastName" />
                        <Input placeholder="Name@email.com" s={12} label="Email" type="email" value={this.state.email} onChange={this.handleInputChange} name="email" />
                        <Input type="Password" label="password" s={12} value={this.state.password} onChange={this.handleInputChange} name="password" />
                        <Button 
                            waves='light' 
                            className="#03a9f4 light-blue modal-close" 
                            typae="button"
                            onClick={this.handleFormSubmit}
                            >
                          Submit
                        </Button>
                      </form>  
                    </Row>
                  </Modal>
          </Navbar>
      </div>
    );  
  }
}

export default Nav;
