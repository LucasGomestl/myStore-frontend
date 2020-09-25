import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Icon = ({ icon, link, color, id }) => {
  return (
    <>
      {link ? (
        <Link to={link} data-testid="link">
          <FontAwesomeIcon icon={icon} color={color} id={id}></FontAwesomeIcon>
        </Link>
      ) : (
        <FontAwesomeIcon icon={icon} color={color} id={id}></FontAwesomeIcon>
      )}
    </>
  );
};

export default Icon;
