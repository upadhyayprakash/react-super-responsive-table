import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

/**
 * Enum Reference: https://www.typescriptlang.org/docs/handbook/enums.html
 */
enum Sizes {
  lg,
  md,
  sm,
}

type ButtonProps = {
  primary?: boolean;
  size?: Sizes;
};

const Button = styled.button<ButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.5em 1em;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Container = styled.div`
  text-align: center;
`;

export type StyledButtonProps = {
  size?: Sizes;
  children?: ReactNode;
};

const StyledButton: FC<StyledButtonProps> = ({ size = Sizes.md, children }) => {
  return (
    <Container>
      <Button primary size={size}>
        {children || "Button"}
      </Button>
    </Container>
  );
};

export default StyledButton;
