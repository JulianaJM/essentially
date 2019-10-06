import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { object } from "prop-types";
import { isMobile } from "react-device-detect";
import { throttle } from "lodash";

import Header from "./header";
import Tags from "../search/tags/tags";

class HeaderContainer extends PureComponent {
  static propTypes = {
    history: object.isRequired,
  };

  ticking = false;

  headerRef = React.createRef();

  componentDidMount() {
    const { history } = this.props;
    history.push("");

    if (!isMobile) {
      window.addEventListener(
        "scroll",
        throttle(this.handleSticky, 100, { trailing: true, leading: true })
      );
    }
    if (isMobile) {
      const { current } = this.headerRef;

      current.classList.add("heightSizeDown--mobile");
      current.firstChild.classList.add("logoSizeDown");
      current.nextElementSibling.classList.add("container");
    }
  }

  componentWillUnmount() {
    if (!isMobile) {
      window.removeEventListener("scroll", this.handleSticky);
    }
  }

  handleChange = queryParams => {
    const { history } = this.props;
    history.push("");
    history.push(`?value=${queryParams}`);
  };

  handleSticky = () => {
    const { current } = this.headerRef;
    if (window.scrollY > 400) {
      current.classList.add("heightSizeDown");
      current.firstChild.classList.add("logoSizeDown");
      current.nextElementSibling.classList.add("container");
    } else if (window.scrollY === 0) {
      current.classList.remove("heightSizeDown");
      current.firstChild.classList.remove("logoSizeDown");
      current.nextElementSibling.classList.remove("container");
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
    return (
      <Header ref={this.headerRef}>
        <div className="search-bar">
          <Tags
            onUpdate={this.handleChange}
            placeholder="je recherche une huile ou un symptome..."
          />
        </div>
      </Header>
    );
  }
}

export default withRouter(HeaderContainer);
