import React, { useEffect } from "react";
import { scrollTop } from "../../utils/scroll";
import "./about.scss";

const About = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="about">
      <div className="about__content">
        <p>
          Ce site est un référentiel d&apos;informations non exhaustif
          d&apos;huiles essentielles.
        </p>
        <p>
          Il ne constitue en aucun cas un avis médical et est donné à titre
          informatif.
        </p>
        <p>Pour tout usage dans un but thérapeutique, consultez un médecin.</p>
        <p>
          Ces informations ont été traité à partir des sites{" "}
          <a
            href="https://www.aroma-zone.com/info/guide-des-huiles-essentielles/tous"
            target="_blank"
            rel="noreferrer"
          >
            Aroma-Zone
          </a>{" "}
          et{" "}
          <a
            href="https://www.doctissimo.fr/sante/aromatherapie/guide-huiles-essentielles"
            target="_blank"
            rel="noreferrer"
          >
            Doctissimo
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
