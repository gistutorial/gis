import React, { Component } from 'react';
import './App.css';
import Header from '../common/Header';
import Footer from '../common/Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
