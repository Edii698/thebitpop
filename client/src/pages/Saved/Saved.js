import React, { Component } from "react";
import Footer from "../../components/Footer";
import FabricCanvas from "../../components/FabricCanvas";
import TemplateList from "../../components/TemplateList";
import Thumbs from "../../components/Thumbs";
import { headlist, eyeslist, hairlist, noselist, mouthlist, extralist, bglist } from '../../images/templates/index';
import API from '../../utils/API'
import myProduct from '../../images/templates/products/myProduct'
import { fabric } from "fabric";
import { Card, CardTitle, Col, Row, Container, Button, Icon, Modal } from 'react-materialize'
import { Link } from "react-router-dom";
import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';
import "./Saved.css";

// import AuthService from '../../components/AuthService';
// import withAuth from '../../components/withAuth';
// const Auth = new AuthService();


class Saved extends Component {
  state = {
      activeProperty: null,
      arts: [],
      fileName: "",
      _id:"",
      user: [],
      token: null,
      nowClicked: "",
      myProducts: [],
      
    };


  componentDidMount() {
    this.getAllArt();
    this.getAllProducts();
  }

  // getToken = () => {
  //   // Retrieves the user token from localStorage
  //   return localStorage.getItem('token')
  // }

  // getUser = (id) => {
  //   API.getAllArt(id)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ user: res.data })
  //     })
  //     .catch(err => console.log(err));
  // };

  getAllArt = () => {
    API.getAllArt()
      .then(res => {
        console.log(res);
        this.setState({ arts: res.data, fileName: "", _id: "", token: localStorage.getItem('token') })})
      .catch(err => console.log(err));
  };

  getAllProducts = () => {
    API.getAllProducts()
      .then(res => {
        console.log(res);
        this.setState({ myProducts: res.data, })
      })
      .catch(err => console.log(err));
  };

  savePillow = (event) => {
    event.preventDefault();
    let useImg = this.state.nowClicked;
      API.saveProduct({
        fileName: useImg,
        item: myProduct.pillow,
        itemType: "pillow-product"
      })
        // .then(res => this.loadBooks())
        .catch(err => console.log(err));
    window.location.reload();
    }

  saveShirt = (event) => {
    event.preventDefault();
    let useImg = this.state.nowClicked;
    API.saveProduct({
      fileName: useImg,
      item: myProduct.shirt,
      itemType: 'shirt-product'
    })
      // .then(res => this.loadBooks())
      .catch(err => console.log(err));
    window.location.reload();
  }
  
  saveMug = (event) => {
    event.preventDefault();
    let useImg = this.state.nowClicked;
    API.saveProduct({
      fileName: useImg,
      item: myProduct.mug,
      itemType: "mug-product"
    })
      // .then(res => this.loadBooks())
      .catch(err => console.log(err));
    window.location.reload();
  }



  getId = (e, art) => {
    e.target.value, art
    console.log(art);
    this.setState({ nowClicked: art.fileName })
  };

  addToCanvas = (imgElement, property_type, z_Index) => {

    var imgInstance = new fabric.Image(imgElement, {
      left: 0,
      top: 0,
      width: 500,
      height: 425,
      the_type: property_type,
      zIndex: z_Index
    });

    this.setState({ activeProperty: imgInstance });

  }

  render() {
    return (
      <div>
          <Container>
            <Row>
              <Col s={12} m={6}>
              <h3 id="userName">Welcome</h3>
                <p>Create a new character below, view characters in your account. Use the buttons to the right to view your saved products and to use our room view feature.</p>
              </Col>
              <Col s={12} m={6}>
                
                <div className="center-align">
                <Modal
                  header='Your Saved Products'
                  bottomSheet
                  trigger={<Button id="view-btn" className="#ff8f00 amber darken-3" waves='light'>View Saved Products<Icon left>view_module</Icon></Button>}>
                  <div>
                    {this.state.myProducts.map(product => (
                      <div className="productThumb" background={product.item}>
                        <img src={product.fileName} alt="thumbnail preview" className={product.itemType} />
                        <img src={product.item} alt="thumbnail preview" className="productBk" /> 
                      </div>
                    ))}
                  </div>
                </Modal>
                    
                </div>
              <div className="center-align">
                <Link to="/preview">
                <Button id="orders-btn" className="#ff8f00 amber darken-3" waves='light'>Room View<Icon left>insert_emoticon</Icon></Button>
                </Link>
              </div> 
              </Col>
            </Row>
            <Row className="center-align">
                  <h5>Click an image to see it on a product below</h5>
            </Row>
            <Row>
              <Col s={12}>
              {this.state.arts.length ? (
                <div>
                  {this.state.arts.map(art => (
                    <img src={art.fileName} id={art.id} value={art.id} onClick={((e) => this.getId(e, art))} alt="thumbnail preview" className="myArt" />
                  ))}
                </div>
              ) : (
                  <h4 className='center-align'>Create a New Character</h4>
                )}  
              </Col>
            </Row>
        </Container>  

        <Row id="toCreate" className="#81d4fa light-blue lighten-3">
          <Container>
            <Row className="center-align">
                  <h4 id="create-title">Create Your Character</h4>
            </Row>
            <Row>
              <Col s={6} className=''>
                <Row>
                  <Row> 
                    <Col s={6} className='center-align'>
                            <Modal
                              header='Pick Your Head Shape'
                              trigger={<Button className='#ff8f00 amber darken-3 option-btn' waves='light'>Head</Button>}>
                              <TemplateList
                                className="thumb"
                                data={headlist}
                                property_type="head"
                                zIndex={1}
                                addtocanvas={this.addToCanvas}
                              />
                            </Modal>
                      </Col>      

                    <Col s={6} className='center-align'>    
                            <Modal
                              header='Pick Your Eyes'
                              trigger={<Button className='#ff8f00 amber darken-3 option-btn' waves='light'>Eyes</Button>}>
                              <TemplateList
                                data={eyeslist}
                                property_type="eyes"
                                zIndex={2}
                                addtocanvas={this.addToCanvas}
                              />
                            </Modal>
                      </Col>
                  </Row>      
                        
                  <Row>
                        <Col s={6} className='center-align'>
                            <Modal
                              header='Pick Your Hair'
                              trigger={<Button className='#ff8f00 amber darken-3 option-btn' waves='light'>Hair</Button>}>
                              <TemplateList
                                data={hairlist}
                                property_type="hair"
                                zIndex={4}
                                addtocanvas={this.addToCanvas}
                              />
                            </Modal>
                        </Col>
                    <Col s={6} className='center-align right-btn'>
                          <Modal
                            header='Pick A Nose'
                              trigger={<Button className='#ff8f00 amber darken-3 option-btn' waves='light'>Nose</Button>}>
                            <TemplateList
                              data={noselist}
                              property_type="nose"
                              zIndex={2}
                              addtocanvas={this.addToCanvas}
                            />
                          </Modal>                         
                        </Col>
                  </Row> 

                  <Row> 
                    <Col s={6} className='center-align'>
                      <Modal
                        header='Pick A Mouth'
                        trigger={<Button className='#ff8f00 amber darken-3 option-btn' waves='light'>Mouth</Button>}>
                        <TemplateList
                          data={mouthlist}
                          property_type="mouth"
                          zIndex={2}
                          addtocanvas={this.addToCanvas}
                        />
                      </Modal>                         
                        </Col>
                    <Col s={6} className='center-align'>
                      <Modal
                        header='Add Something Extra'
                        trigger={<Button className='#ff8f00 amber darken-3 option-btn' waves='light'>Extras</Button>}>
                        <TemplateList
                          data={extralist}
                          property_type="extras"
                          zIndex={6}
                          addtocanvas={this.addToCanvas}
                        />
                      </Modal>                            
                        </Col>
                  </Row> 
                  <Row>       
                    <Col s={12} className='center-align'>
                      <Modal
                        header='Add A Background'
                        trigger={<Button className='#ff8f00 amber darken-3 option-btn-big' waves='light'>Background</Button>}>
                        <TemplateList
                          data={bglist}
                          property_type="background"
                          zIndex={-999}
                          addtocanvas={this.addToCanvas}
                        />
                      </Modal>
                    </Col>
                  </Row>  
                </Row>
              </Col>  
              <Col s={6} className='home-info center-align'>
                <FabricCanvas
                  activeProperty={this.state.activeProperty}
                />
                
              </Col>
            </Row>
          </Container>
        </Row>

        <Row className="">
            <Container>
              <Row className="center-align">
                <h4>Preview Your Character On A Product</h4>
                <p>Click on one of your saved characters above to preview them on a product.</p>
              </Row>
              <Row>
                  <Col s={12} m={4} className='home-info' >
                      <div id="pillow">
                          <img src={this.state.nowClicked} alt="" className="previewImg-pillow" />
                      </div> 
                      <div className="center-align">
                      <Modal
                        className="modal-pre"
                        trigger={<Button waves='light' className="#039be5 light-blue darken-1 previewBtn">Preview</Button>}>
                        
                          <div id="pillow-big">
                            <img src={this.state.nowClicked} alt="" className="previewImg-pillow-big" />
                          </div>                       
                      </Modal>
                        <div>
                    <Button waves='light' className="#039be5 light-blue darken-1 previewBtn-save" onClick={this.savePillow}>Save</Button>
                        </div>
                      </div>
                  </Col>
                  <Col s={12} m={4} className='home-info'>
                      <div id="shirt">
                        <img src={this.state.nowClicked} alt="" className="previewImg-shirt" />
                      </div>
                      <div className="center-align">
                        <Modal
                          className="modal-pre"
                          trigger={<Button waves='light' className="#039be5 light-blue darken-1 previewBtn">Preview</Button>}>

                          <div id="shirt-big">
                            <img src={this.state.nowClicked} alt="" className="previewImg-shirt-big" />
                          </div>
                        </Modal>
                          <div>
                    <Button waves='light' className="#039be5 light-blue darken-1 previewBtn-save" onClick={this.saveShirt}>Save</Button>
                          </div>
                      </div>
                  </Col>
                  <Col s={12} m={4} className='home-info'>
                      <div id="mug">
                        <img src={this.state.nowClicked} alt="" className="previewImg-mug" />
                      </div>
                      <div className="center-align">
                        <Modal
                          className="modal-pre"
                          trigger={<Button waves='light' className="#039be5 light-blue darken-1 previewBtn">Preview</Button>}>

                          <div id="mug-big">
                                <img src={this.state.nowClicked} alt="" className="previewImg-mug-big" />                           
                          </div>
                        </Modal>
                          <div>
                    <Button waves='light' className="#039be5 light-blue darken-1 previewBtn-save" onClick={this.saveMug}>Save</Button>
                          </div>
                      </div>
                  </Col>
              </Row>
            </Container>
        </Row>
          <Footer />
      </div>
    );
  }
}

export default Saved;
// export default withAuth(Saved);
