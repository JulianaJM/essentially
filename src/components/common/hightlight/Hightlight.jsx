import React from "react";
import PropTypes from "prop-types";
import Highlighter from "react-highlight-words";

const Hightlight = ({ hightlight, content }) => {
  return (
    <Highlighter
      // highlightClassName="YourHighlightClass"
      searchWords={hightlight}
      autoEscape
      textToHighlight={content}
    />
  );
};

export default Hightlight;

Hightlight.defaultProps = {
  hightlight: [],
  content: "",
};

Hightlight.propTypes = {
  hightlight: PropTypes.array,
  content: PropTypes.string,
};
