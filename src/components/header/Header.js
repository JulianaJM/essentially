import React, { PureComponent } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Tags from '../search/tags/Tags';

import './header.scss';
class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    const { history } = this.props;

    if (this.headerRef) {
      window.addEventListener('scroll', () =>
        this.handleScroll(this.headerRef.current)
      );
    }
    history.push('');
  }
  handleChange = queryParams => {
    const { history } = this.props;
    history.push(`?value=${queryParams}`);
  };

  handleScroll(ref) {
    if (
      document.body.scrollTop > 450 ||
      document.documentElement.scrollTop > 450
    ) {
      ref.classList.add('heightScrollDown');
      ref.firstChild.classList.add('logoSizeDown');
    } else {
      ref.classList.remove('heightScrollDown');
      ref.firstChild.classList.remove('logoSizeDown');
    }
  }

  render() {
    return (
      <div className="header" ref={this.headerRef}>
        <div className="header__title">
          <h1 id="logo">Essentially</h1>
          <img src="/assets/images/logo.png" />
        </div>
        <div className="search-bar">
          <Tags onUpdate={this.handleChange} />
        </div>
        {/* <div className="navbar-links">
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/about">A propos</NavLink>
        </div> */}
      </div>
    );
  }
}
Header.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
