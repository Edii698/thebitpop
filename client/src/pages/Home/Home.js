import React, { Component } from "react";
// import Card from "../../components/Card";
// import Form from "../../components/Form";
import Article from "../../components/Article";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import API from "../../utils/API";
// import { Col, Row, Container } from "../../components/Grid";
import { List } from "../../components/List";
import { Card, CardTitle, Col, Row, Container } from 'react-materialize'
import "./Home.css";

class Home extends Component {
  state = {
    articles: [],
    q: "",
    start_year: "",
    end_year: "",
    message: "Search For Articles To Begin!"
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getArticles();
  };

  handleArticleSave = id => {
    const article = this.state.articles.find(article => article._id === id);
    API.saveArticle(article).then(res => this.getArticles());
  };

  render() {
    return (
      <div>
          <Header />
          
            <Row className="home-prod-pre">
              <Col s={12} className='home-info'>
              
                <img src={require("../../images/templates/products/pillow-hm.png")} className="home-img" alt="" />
            <img src={require("../../images/templates/products/shirt-hm.png")} alt="" className="home-img" />
            <img src={require("../../images/templates/products/mug-hm.png")} alt="" className="home-img" />
              </Col>
              {/* <Col s={12} m={4} className='home-info'>
              <div >
                <img src={require("../../images/templates/products/shirt-hm.png")} alt="" className="home-img"/>
                </div>
              </Col>
              <Col s={12} m={4} className='home-info'>
              <div >
              <img src={require("../../images/templates/products/shirt-hm.png")} alt="" className="home-img" />
                    </div>
              </Col> */}
            </Row>
            
          
        <Footer className="hm-footer"/>
      </div>
    );
  }
}

export default Home;
