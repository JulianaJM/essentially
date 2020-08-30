import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { isMobile, isMobileOnly } from "react-device-detect";
import PropTypes from "prop-types";
import { throttle } from "lodash";

import { isPageBottom } from "../../../utils/scroll";

import Header from "./Header";

class HeaderContainer extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.ticking = false;

    this.headerRef = React.createRef();

    this.throttledFunc = throttle(this.handleScroll, 100, {
      trailing: true,
      leading: true,
    });
  }

  componentDidMount() {
    if (!isMobileOnly) {
      window.addEventListener("scroll", this.throttledFunc);
    }
  }

  componentWillUnmount() {
    if (!isMobileOnly) {
      window.removeEventListener("scroll", this.throttledFunc);
    }
  }

  handleSticky = () => {
    const { current } = this.headerRef;
    const isBottom = isPageBottom();
    if (window.pageYOffset > 100 /* current.offsetTop */) {
      current.classList.add("sticky");
    } else if (!isBottom) {
      current.classList.remove("sticky");
    }
  };

  handleScroll = () => {
    // Scroll event throttling
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.handleSticky();
        this.ticking = false;
      });
      this.ticking = true;
    }
  };

  goBack = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const { location } = this.props;

    return (
      <Header
        ref={this.headerRef}
        goBack={this.goBack}
        shouldShowBackButton={
          isMobile &&
          location.pathname !== "/" &&
          location.pathname !== "/notfound"
        }
      />
    );
  }
}

export default withRouter(HeaderContainer);
