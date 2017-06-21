import React, { Component } from 'react';
import { nav, button } from 'react-bootstrap';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              <img alt="logo" className="bachelor-logo" src="The_Bachelor_usa_logo.png"/>
            </a>
          </div>
          <ul className="nav navbar-nav navbar-buttons">
            <li><button type="play" className="btn btn-primary play-button">Let's Play!</button></li>
          </ul>
          <ul className="nav navbar-nav navbar-right navbar-buttons">
            <li>Score</li>
            <li><button type="play" className="btn btn-danger">Restart</button></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;