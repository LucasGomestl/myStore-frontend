import React, {useState, useEffect} from "react";

import { StyledBanner, StyledLink } from "./styles";
import BannerDesktop from "../../assets/img/home-banner/banner.gif";
import BannerTablet from "../../assets/img/home-banner/banner-tablet.gif";
import BannerMobile from "../../assets/img/home-banner/banner-mobile.gif";



const Banner = () => {
  let [bannerImage, setBannerImage] = useState('');

  const changeBannerImage = () =>{

    const screenWidth = window.innerWidth;
    if(screenWidth > 1000){
      bannerImage = setBannerImage(BannerDesktop);
    }else{
      if(screenWidth > 550){
        bannerImage = setBannerImage(BannerTablet)
      }else{
        bannerImage = setBannerImage(BannerMobile)
      }
    }
  }

  useEffect(() => {
    changeBannerImage();
    window.addEventListener('resize', changeBannerImage)
  })
  return (
    <>
      <StyledLink to="/offers/">
        <StyledBanner src={bannerImage} />
      </StyledLink>
    </>
  );
};

export default Banner;
