import React, { useEffect } from "react";
import { scrollTop } from "../../utils/scroll";
import "./more.scss";

const More = () => {
  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="more">
      <div className="more__content">
        <p>Quelques liens pour aller plus loin : </p>
        <br />
        <p>
          <a
            href="https://www.doctissimo.fr/sante/aromatherapie/utilisation-des-huiles-essentielles/comment-utiliser-huiles-essentielles"
            target="_blank"
            rel="noreferrer"
          >
            Comment utiliser les huiles essentielles ?
          </a>
        </p>
        <p>
          <a
            href="https://www.lessentieldejulien.com/"
            target="_blank"
            rel="noreferrer"
          >
            L&rsquo;essentiel de Julien
          </a>
        </p>
        <p>
          <a
            href="https://www.slow-cosmetique.com/"
            target="_blank"
            rel="noreferrer"
          >
            Slow cosmetique
          </a>
        </p>
        <p>
          <a href="https://revelessence.com/" target="_blank" rel="noreferrer">
            Revelessence
          </a>
        </p>
        <p>
          <a
            href="https://aucoeurdesracines.fr/"
            target="_blank"
            rel="noreferrer"
          >
            Au coeur des racines
          </a>
        </p>

        <p>
          <a
            href="https://www.macosmetoperso.com/"
            target="_blank"
            rel="noreferrer"
          >
            Ma cosmeto perso
          </a>
        </p>
      </div>
    </div>
  );
};

export default More;
