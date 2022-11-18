import React from "react";
import Image from "next/image";

import git from "../assets/img/git.svg";
import ig from "../assets/img/ig.svg";
import linkd from "../assets/img/linkd.svg";
import mouse from "../assets/img/mouse.svg";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-between ">
        <div className="follow-me flex gap-3">
          <h3 className="text-2xl">Follow me: </h3>
          <div className="icons flex gap-3">
            <Image src={git} alt="git" />
            <Image src={ig} alt="ig" />
            <Image src={linkd} alt="linkd" />
          </div>
        </div>
        <div className="mouse">
          <Image src={mouse} alt="mouse" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
