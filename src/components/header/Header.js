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
        <div className="navbar-title">
          <h1 id="logo">Essentially</h1>
        </div>
        <div className="navbar-right">
          <div className="navbar-search">
            <Tags onUpdate={this.handleChange} />
          </div>
          <div className="navbar-links">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">A propos</NavLink>
          </div>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
