import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  padding: 1rem 2rem;
  background: transparent;
  appearance: none;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
  letter-spacing: 0.05rem;
  transition: 0.2s all ease-in-out;

  &:hover {
    transform: translate(0, -2px);
  }
`;

const Button = ({ className, onClick, children, primary }) => (
  <StyledButton className={className} onClick={onClick} primary={primary}>
    {children}
  </StyledButton>
);

export default Button;
