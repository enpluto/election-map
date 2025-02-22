type ToggleDropdownProps = (
  event: React.MouseEvent,
  setShow: React.Dispatch<React.SetStateAction<boolean>>
) => void;

export const toggleDropdown: ToggleDropdownProps = (event, setShow) => {
  event.stopPropagation();
  setShow((prev) => !prev);
};
