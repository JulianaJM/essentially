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

Hightlight.propTypes = {
  hightlight: PropTypes.array.isRequired,
  content: PropTypes.string.isRequired,
};
