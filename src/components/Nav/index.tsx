import { useRef, useState } from "react";
import logoSvg from "../../assets/logo.svg";
import menuSvg from "../../assets/menu.svg";
import useClickOutside from "../../hooks/useClickOutside";
import Menu from "./Menu";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useClickOutside(listRef, () => setIsOpen(false));

  const handleShowMenu = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <img src={logoSvg} alt="logo" />
      <img
        src={menuSvg}
        alt="menu"
        style={{ cursor: "pointer" }}
        onClick={handleShowMenu}
      />
      <Menu isOpen={isOpen} listRef={listRef} handleShowMenu={handleShowMenu} />
    </nav>
  );
};

export default Nav;
