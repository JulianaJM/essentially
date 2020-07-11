import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { isMobileOnly } from "react-device-detect";
import { throttle } from "lodash";

import Header from "./Header";
import { isPageBottom } from "../../utils/scroll";

class HeaderContainer extends PureComponent {
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
    if (window.pageYOffset > current.offsetTop) {
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

  render() {
    return <Header ref={this.headerRef} />;
  }
}

export default withRouter(HeaderContainer);
