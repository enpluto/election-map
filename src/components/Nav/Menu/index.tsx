import { RefObject } from "react";
import { linkList } from "../../../data/list";
import { arrowSvg, closeSvg } from "../../../data/svg/icon";

interface MenuPropsType {
  isOpen: boolean;
  listRef: RefObject<HTMLDivElement>;
  handleShowMenu: (event: React.MouseEvent) => void;
}

const Menu = ({ isOpen, listRef, handleShowMenu }: MenuPropsType) => {
  return (
    <div className={`menu-wrapper ${isOpen ? "open" : ""}`} ref={listRef}>
      <div onClick={(e) => handleShowMenu(e)}>{closeSvg}</div>
      <ul className="menu">
        {linkList.map(({ title, url }) => (
          <li key={title}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="menu__item"
              onClick={(e) => handleShowMenu(e)}
            >
              {title}
              {arrowSvg}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
