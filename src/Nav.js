import React, { Component } from 'react';
import Score from './Score';

class Nav extends Component {
  handleClick() {
    window.location.reload();
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="roseBackground">
              <img className="rosePic" src="https://www.freewebheaders.com/wordpress/wp-content/gallery/roses/red-rose-flower-petals-background-header.jpg"/>
              <div>
                <a href="#">
                  <img alt="logo" className="bachelor-logo" src="The_Bachelor_usa_logo.png"/>
                </a>
                <div className="navOptions">
                  <ul className="nav navbar-nav navbar-right navbar-buttons">
                    <li><button onClick={this.handleClick} type="play" className="btn btn-danger resetButton"><span className="glyphicon glyphicon-repeat" aria-hidden="true"></span></button></li>
                    <li><Score score={this.props.score}/></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;