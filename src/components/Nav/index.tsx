import { useEffect, useRef, useState } from "react";
import logoSvg from "../../assets/logo.svg";
import menuSvg from "../../assets/menu.svg";
import { arrowSvg, closeSvg, linkList } from "./data";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (listRef.current && !listRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleShowMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <nav>
        <img src={logoSvg} alt="logo" />
        <img
          src={menuSvg}
          alt="menu"
          style={{ cursor: "pointer" }}
          onClick={handleShowMenu}
        />
      </nav>
      <div className={`menu-wrapper ${isOpen ? "open" : ""}`} ref={listRef}>
        <div onClick={handleShowMenu}>{closeSvg}</div>
        <ul className="menu">
          {linkList.map((link) => {
            const { title, url } = link;

            return (
              <a
                key={title}
                href={url}
                target="_blank"
                className="menu__item"
                onClick={handleShowMenu}
              >
                {title}
                {arrowSvg}
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Nav;
