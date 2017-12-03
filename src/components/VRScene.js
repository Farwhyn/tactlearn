import React, { Component } from 'react';
import 'aframe';
import 'aframe-animation-component';
import {Entity, Scene} from 'aframe-react';
import { Sky } from 'react-aframe-ar';
import 'aframe-extras';
import 'super-hands';
import 'aframe-mountain-component';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import {fullWhite} from 'material-ui/styles/colors';

const style = {
  margin: 12,
};

class VRScene extends Component {

  constructor(props) {
    super(props);
   // this.changeShape = this.changeShape.bind(this);
    this.state = {color: 'red', shape: 'box'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }
  changeShape(shape) {
    if (this.state.shape !== shape) {
      this.setState({
        shape: shape
      })
    }
  }
  render() {

    return (
      <div className="wrapper">
      <Scene vr-mode-ui={{enabled: false}}>
        <Sky color="lightblue"/>
         <Entity id="box"
          geometry={{primitive: this.state.shape}}
          material={{color: this.state.color, opacity: 0.6}}
          animation__rotate={{property: 'rotation', dur: 2000, loop: true, to: '360 360 360'}}
          //animation__scale={{property: 'scale', dir: 'alternate', dur: 100, loop: true, to: '1.1 1.1 1.1'}}
          position={{x: 0, y: 1, z: -3}}
          events={{click: this.changeColor.bind(this)}} />
        <Entity primitive="a-camera">
          <Entity primitive="a-cursor" animation__click={{ startEvents: 'click'}}/>
        </Entity>
        <Entity mountain />
      </Scene>
      <div className = "button-panel">
    <FlatButton
    backgroundColor="#a4c639"
    hoverColor="#8AA62F"
      style={style}
      label="box"
      onTouchTap={() => {this.changeShape('box'); }}
    />
    <FlatButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      label="torus"
      style={style}
      onTouchTap={() => {this.changeShape('torus'); }}
    />
    <FlatButton
      backgroundColor="#a4c639"
      hoverColor="#8AA62F"
      label="icosahedron"
      style={style}
      onTouchTap={() => {this.changeShape('icosahedron'); }}
    />
  </div>
      </div>

    );
  }


}


export default VRScene;