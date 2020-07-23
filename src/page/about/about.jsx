import React, { useEffect } from "react";
import { scrollTop } from "../../utils/scroll";
import "./about.scss";

const About = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="about">
      <p>Ceci est un référentiel non exhaustif d&apos;huiles essentielles.</p>
      <p>
        Ces informations n&apos;ont aucune valeur médicale, pour tout traitement
        consulter votre médecin.
      </p>
      <p>Sources provenant de Aroma-Zone et de Doctissimo.</p>
    </div>
  );
};

export default About;
