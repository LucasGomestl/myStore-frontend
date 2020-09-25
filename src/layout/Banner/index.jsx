import React from "react";

import { StyledBanner, StyledLink } from "./styles";
import BannerImage from "../../assets/img/home-banner/banner.gif";

const Banner = () => {
  return (
    <>
      <StyledLink to="/offers/">
        <StyledBanner src={BannerImage} />
      </StyledLink>
    </>
  );
};

export default Banner;
