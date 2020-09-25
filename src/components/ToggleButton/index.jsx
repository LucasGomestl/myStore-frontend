import React from "react";

import { StyledToggleButton } from "./styles";

import Icon from "../Icon";

const ToggleButton = () => {
  const ToggleMenu = () => {
    const overlay = document.querySelector(".overlay");
    overlay.classList.toggle("open");

    setTimeout(function () {
      const menu = document.querySelector(".menu");
      menu.classList.toggle("open");
    }, 100);
  };

  return (
    <StyledToggleButton onClick={ToggleMenu}>
      <Icon icon="bars" color="white" />
    </StyledToggleButton>
  );
};

export default ToggleButton;
