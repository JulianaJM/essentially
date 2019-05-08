import React, { Component } from 'react';
import './header.scss';
class Header extends Component {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    if (this.headerRef) {
      window.addEventListener('scroll', () =>
        this.handleScroll(this.headerRef.current)
      );
    }
  }

  handleScroll(ref) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      ref.classList.add('paddingScrollDown');
      ref.firstChild.classList.add('fontSizeDown');
    } else {
      ref.classList.remove('paddingScrollDown');
      ref.firstChild.classList.remove('fontSizeDown');
    }
  }
  render() {
    return (
      <div className="header" ref={this.headerRef}>
        <h1 id="logo">Essentially</h1>
        <div className="navbar-right">
          <a className="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}

export default Header;
