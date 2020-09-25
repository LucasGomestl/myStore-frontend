import React from "react";
import Icon from "../../components/Icon";

import { StyledSocials, SocialsList } from "./styles";

const Socials = () => {
  return (
    <StyledSocials>
      <SocialsList>
        <li>
          <a
            href="https://github.com/LucasGomestl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={["fab", "github"]} color="white" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/lucasgomes.tl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={["fab", "facebook-f"]} color="white" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=5567992938017"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon icon={["fab", "whatsapp"]} color="white" />
          </a>
        </li>
      </SocialsList>
    </StyledSocials>
  );
};

export default Socials;
