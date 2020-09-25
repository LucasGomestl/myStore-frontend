import React from "react";
import { StyledLoading } from "./styles";

const Loading = () => {
  return (
    <StyledLoading>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoading>
  );
};

export default Loading;
