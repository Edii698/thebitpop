import React from 'react';
import { Col } from 'react-materialize';

const thumbStyle = {
    height: "125px"
}

export default class TemplateListItem extends React.Component {

    localAddToCanvas = (e) => {
        e.preventDefault();
        this.props.addToCanvas(e.target, this.props.property_type, this.props.zIndex);
    }


    render() {

        return (

            <Col xs={6} md={4} >
                <a href="#" className="thumb modal-action modal-close waves-effect waves-orange" onClick={this.localAddToCanvas}>
                    <img alt="" style={thumbStyle} src={this.props.url} />
                </a>
            </Col>
        );
    }
}