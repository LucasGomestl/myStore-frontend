import React from "react";
import Socials from "../../components/Socials";

import { StyledFooter, SocialsContainer, Credits } from "./styles";

const Footer = () => {
  return (
    <StyledFooter>
      <Credits>Developed by Lucas Gomes</Credits>
      <SocialsContainer>
        <Socials />
      </SocialsContainer>
    </StyledFooter>
  );
};

export default Footer;
