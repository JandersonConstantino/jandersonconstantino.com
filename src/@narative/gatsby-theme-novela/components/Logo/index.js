import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const Logo = ({ fill = "#fff" }) => {
  return (
    <LogoContainer>
      <h3 className="Logo__Desktop">Janderson Constantino</h3>
      <h3 className="Logo__Mobile">Janderson</h3>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
