import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { object, bool } from "prop-types";
import { isMobile } from "react-device-detect";

import Header from "./header";
import Tags from "../search/tags/tags";

class HeaderContainer extends PureComponent {
  static propTypes = {
    history: object.isRequired,
    isSticky: bool.isRequired,
  };

  ticking = false;

  headerRef = React.createRef();

  componentDidMount() {
    const { history } = this.props;
    history.push("");

    if (isMobile) {
      const { current } = this.headerRef;

      current.classList.add("heightSizeDown--mobile");
      current.firstChild.classList.add("logoSizeDown");
      current.nextElementSibling.classList.add("container");
    }
  }

  componentDidUpdate(prevProps) {
    const { isSticky } = this.props;
    if (prevProps.isSticky !== isSticky) {
      this.handleScroll();
    }
  }

  handleChange = queryParams => {
    const { history } = this.props;
    history.push("");
    history.push(`?value=${queryParams}`);
  };

  handleSticky = () => {
    const { current } = this.headerRef;
    const { isSticky } = this.props;
    if (isSticky) {
      current.classList.add("heightSizeDown");
      current.firstChild.classList.add("logoSizeDown");
      current.nextElementSibling.classList.add("container");
    } else {
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
