import React from "react";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTypography = styled(Typography)`
  font-size: 200px;
`;

const StyledTypographyTwo = styled(StyledTypography)`
  color: red;
`;

const Nav = () => {
  return (
    <MainContainer>
      <StyledTypography>a</StyledTypography>
      <StyledTypographyTwo>b</StyledTypographyTwo>
      <div>c</div>
    </MainContainer>
  );
};

export default Nav;
