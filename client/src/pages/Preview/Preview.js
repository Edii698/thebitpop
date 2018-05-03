import React, { Component } from "react";
import Footer from "../../components/Footer";
import FabricCanvas from "../../components/FabricCanvas";
import TemplateList from "../../components/TemplateList";
import Thumbs from "../../components/Thumbs";
import { headlist, eyeslist, hairlist, noselist, mouthlist, extralist, bglist } from '../../images/templates/index';
import API from '../../utils/API'
import { fabric } from "fabric";
import { Card, CardTitle, Col, Row, Container, Button, Icon, Modal } from 'react-materialize'
// import { Canvas } from 'react-fabricjs';
// import 'aframe';
// import 'aframe-particle-system-component';
import { Entity, Scene } from 'aframe-react';
import ReactDOM from 'react-dom';



class Preview extends Component {

    state = {
        arts: [],
        fileName: "",
        _id: "",
        user: [],
        activeImg: ""
    };


    componentDidMount() {
        this.getNewArt();
    }
    
    getNewArt = () => {
        API.getNewArt()
            .then(res => {
                console.log(res);
                this.setState({ arts: res.data })
            })
            .catch(err => console.log(err));

    };


    render() {

            return (
                <div className="App">
                    <Scene artoolkit={{ sourceType: 'webcam', trackingMethod: 'best' }}>
                        <a-marker preset='hiro'>
                            {this.state.arts.map(art => (
                                <a-image rotation="90 0 180" src={art.fileName} alt="latest character"></a-image>
                            ))}

                        </a-marker>
                        <Entity camera />
                    </Scene>
                </div>
            );
        }
    
}

export default Preview;
// export default Preview;