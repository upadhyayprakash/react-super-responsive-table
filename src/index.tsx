import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

/**
 * Enum Reference: https://www.typescriptlang.org/docs/handbook/enums.html
 */
export enum Sizes {
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
  ${({ size }) => {
    switch (size) {
      case Sizes.lg:
        return css`
          padding: 1em 2em;
          font-size: 1.5rem;
        `;
      case Sizes.md:
        return css`
          padding: 0.5em 1em;
          font-size: 1rem;
        `;
      case Sizes.sm:
        return css`
          padding: 0.25em 0.5em;
          font-size: 0.75rem;
        `;
      default:
        return css`
          padding: 0.5em 1em;
          font-size: 1rem;
        `;
    }
  }}
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
