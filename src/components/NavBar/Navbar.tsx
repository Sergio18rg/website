import React from "react";
import "../NavBar/Navbar.styles.scss";

interface ILinks {
  url: string;
}
interface INavbarProps {
  title: string;
  links: Array<ILinks>;
}

const Navbar = ({ links, title }: INavbarProps) => {
  const half = Math.floor((links.length - 1) / 2);
  const firstHalf = links.slice(0, half);
  const secondHalf = links.slice(firstHalf.length, links.length);

  return (
    <>
      <div className="navbar-container border-bottom">
        <div className={"links"}>
          {firstHalf.map((link, index) => (
            <a href={link.url} key={`navbar-before-links-${index}`}>
              Enlace {link.url}
            </a>
          ))}
        </div>
        <h1 className="navbar-title">{title}</h1>
        <div className={"links"}>
          {secondHalf.map((link, index) => (
            <a href={link.url} key={`navbar-after-links-${index}`}>
              Enlace {link.url}
            </a>
          ))}
        </div>
      </div>{" "}
      <div className="second-border-bottom"></div>
    </>
  );
};

export default Navbar;
