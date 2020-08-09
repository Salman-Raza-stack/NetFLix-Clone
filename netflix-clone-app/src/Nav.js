import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://img.pngio.com/netflix-brand-assets-netflix-logo-transparent-background-800_454.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://scontent.fkhi2-1.fna.fbcdn.net/v/t1.0-9/35524075_1583747115084044_1194159225077497856_o.jpg?_nc_cat=107&_nc_sid=174925&_nc_eui2=AeEFdkxsJXAD-rtEgHQKBx8RLqpR0SPpHTguqlHRI-kdOM74YnBkuhavoCmyjzYmYqcO42RLRJFS7n6Mm7U-0InJ&_nc_ohc=-plt4Oem518AX_euotN&_nc_oc=AQnVG3cniCPxxbfLAlHnTl7gsR_BnliLALVhfhUi92j8llHxju9po3vjjtWttIwmC0Y&_nc_ht=scontent.fkhi2-1.fna&oh=24aa5b3b4346ec3d3d60c5244cf3c59f&oe=5F457DF8"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
