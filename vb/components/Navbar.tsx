import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  // Check on which route we are and set the active class
  const [activeMain, setActiveMain] = useState(true);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeSkills, setActiveSkills] = useState(false);
  const [activeWork, setActiveWork] = useState(false);

  const mainRoute = () => {
    setActiveMain(true);
    setActiveAbout(false);
    setActiveSkills(false);
    setActiveWork(false);
  };

  const aboutRoute = () => {
    setActiveMain(false);
    setActiveAbout(true);
    setActiveSkills(false);
    setActiveWork(false);
  };

  const workRoute = () => {
    setActiveWork(true);
    setActiveSkills(false);
    setActiveMain(false);
    setActiveAbout(false);
  };

  const skillsRoute = () => {
    setActiveWork(false);
    setActiveSkills(true);
    setActiveMain(false);
    setActiveAbout(false);
  };
  return (
    <>
      <nav className="flex items-center justify-between py-5 z-100">
        <div className="logo">
          <h1 className="text-3xl">VB</h1>
        </div>
        <ul className="flex items-center gap-5 links">
          <li className={activeMain ? "active" : ""} onClick={mainRoute}>
            <Link href="/">Main</Link>
          </li>
          <li className={activeAbout ? "active" : ""} onClick={aboutRoute}>
            <Link href="/about">About</Link>
          </li>
          <li className={activeWork ? "active" : ""} onClick={workRoute}>
            <Link href="/work">Work</Link>
          </li>
          <li className={activeSkills ? "active" : ""} onClick={skillsRoute}>
            <Link href="/skills">Skills</Link>
          </li>
          <li>
            <Link className="hire" href="/hire">
              Hire me
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
