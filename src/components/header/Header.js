import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.scss';
class Header extends PureComponent {
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
  handleChange = e => {
    // const value = e.target.value;
    if (e.keyCode === 13) {
      // TODO
    }
  };

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
          <NavLink to="/">Recherche</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <input
            type="text"
            placeholder="Je recherche une huile.."
            onKeyUp={this.handleChange}
          />
          <i className="fa fa-search" />
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
