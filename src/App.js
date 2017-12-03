import React, { Component } from 'react';
import './App.css';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './components/Header';
import Footer from './components/Footer';
import VRScene from './components/VRScene';

class App extends Component {
  render() {
    return (
      <MultiThemeProvider>
        <div className="wrapper">
          <Header />
            <div className = "main-content" height="200px" width="100%">
              <VRScene />
            </div>
        </div>
      </MultiThemeProvider>
    );
  }
}

export default App;
