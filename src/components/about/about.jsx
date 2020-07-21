import React, { useEffect } from "react";
import { scrollTop } from "../../utils/scroll";

const About = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div>
      <p>Sources provenant de Aroma-Zone et Doctissimo</p>
    </div>
  );
};

export default About;
