import React from "react";
import { Button } from "../../componentsUi/ui/button";
import { CoolMode } from "../../componentsUi/magicui/cool-mode";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://drive.google.com/file/d/10Cya3rSyD5J3tnPgdlOJt50qcE7DYPh9/view?usp=sharing"
        download
        className="btn"
      >
        <Button className="text-lg">My Resume</Button>
      </a>
      <a href="#contact" className=" btn btn-primary">
        <CoolMode>
          <Button className="text-lg">Let's Talk!!</Button>
        </CoolMode>
      </a>
    </div>
  );
};

export default CTA;
