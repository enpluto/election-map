import logoSvg from "../../assets/logo.svg";
import menuSvg from "../../assets/menu.svg";
import { arrowSvg, closeSvg, linkDataset } from "./data";

const Nav = () => {
  return (
    <>
      <nav>
        <img src={logoSvg} alt="logo" />
        <img src={menuSvg} alt="menu" style={{ cursor: "pointer" }} />
      </nav>
      <div className="menu-wrapper">
        <div>{closeSvg}</div>
        <ul className="menu">
          {linkDataset.map((link) => (
            <li key={link.title} className="menu__item">
              <a href={link.url} target="_blank">
                {link.title}
              </a>
              <div className="blackArrow">{arrowSvg}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
