import { useState } from "react";
import { Menu } from "./menu";
import { ToggleButton } from "./toggle-button";

export function Dropdown({children, title}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  return <>
    <ToggleButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
      {title}
    </ToggleButton>

    {isMenuVisible && <Menu>{children}</Menu>}
  </>
}