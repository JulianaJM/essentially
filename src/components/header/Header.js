import React, { PureComponent } from 'react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import './header.scss';
class Header extends PureComponent {
  constructor(props) {
    super(props);
    this.headerRef = React.createRef();
    this.state = { value: '' };
  }

  componentDidMount() {
    if (this.headerRef) {
      window.addEventListener('scroll', () =>
        this.handleScroll(this.headerRef.current)
      );
    }
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
    if (e.keyCode === 13) {
      const { history } = this.props;
      const { value } = this.state;
      history.push(`/${value}`);
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
    const { value } = this.state;
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
          <Link to={`/${value}`}>
            <i className="fa fa-search" />
          </Link>
        </div>
      </div>
    );
  }
}
Header.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(Header);
