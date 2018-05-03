import React from 'react';
import { fabric } from 'fabric';
import { Button } from 'react-materialize';
import API from '../../utils/API'

class FabricCanvas extends React.Component {

    componentDidMount() {

        // Make a New Canvas
        this.the_canvas = new fabric.StaticCanvas('main-canvas', {
            preserveObjectStacking: true,
            height: 425,
            width: 500,
        });
    }

    componentWillReceiveProps = (newprops) => {

        // If Updated Item is not the same as the old one
        //      => Update the canvas with newer item
        if (newprops.activeProperty !== this.props.activeProperty) {
            this.updateCanvasforImage(this.props.activeProperty, newprops.activeProperty);
        }
    }

    updateCanvasforImage = (prev, next) => {

        if (next) {

            let to_remove;
            // Find the same kind of element
            this.the_canvas.forEachObject((object) => {

                if (object.the_type === next.the_type) {
                    to_remove = object;
                }
            });

            this.the_canvas.remove(to_remove);

            if (next.the_type === 'bg') {
                this.the_canvas.setBackgroundImage(next);
                this.the_canvas.renderAll();
                return;
            }

            this.the_canvas.add(next);
            this.the_canvas.moveTo(next, next.zIndex);
        }
    }

    saveToCanvas = (event) => {
        event.preventDefault();
        let link = document.createElement("a");
        console.log(`this is the link ${link}`);
        link.href = this.the_canvas.toDataURL({ format: 'png' });
        // link.href = this.the_canvas.toSVG();
        console.log(link.href)
        link.download = "avatar.png";
        console.log(link.download);
        
        if (link.href) {
            API.saveArt({
                fileName: link.href,
                // _UserId: 
            })
                // .then(res => this.loadBooks())
                .catch(err => console.log(err));
                window.location.reload();
        }

    }

    render() {

        return (
            <div className="main-canvas-container">

                <canvas id='main-canvas' className="#e8f5e9 green lighten-5 z-depth-2">
                </canvas>
                <div></div>
                <Button bsStyle="success" className="#ffb300 amber darken-1 optionFont" onClick={this.saveToCanvas} bsSize="large" block>
                    Save Your Character
                </Button>
            </div>
        );
    }
}

export default FabricCanvas;