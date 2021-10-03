import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const OptionContainerStyles = css`
  margin: 0rem 3rem;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  font-size: 1.5rem;
  margin: 0px 4rem;
`;

export const OptionsContainer = styled.div`
  display: flex;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
