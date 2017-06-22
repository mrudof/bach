import React, { Component } from 'react';
import Score from './score';

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
                  <li><Score count={this.props.count} score={this.props.score}/></li>
                  <div className="heartDiv">
                    <svg className="heart" viewBox="0 0 32 29.6">
                      <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                    </svg>
                  </div>
                  <div className="resetDiv">
                    <li><button onClick={this.handleClick} type="play" className="resetButton"><span className="glyphicon glyphicon-repeat" aria-hidden="true"></span>
</button></li>
                  </div>
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