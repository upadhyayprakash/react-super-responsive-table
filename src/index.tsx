import React, { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

/**
 * Fetches the package version from package.json
 */
export const __VERSION__ = "[VI]{version}[/VI]";

/**
 * Gets the build timestamp
 */
export const __BUILD_DATE__ = "[VI]{date}[/VI]";

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

/**
 * Type definition:
 * - size: size of the button decides its padding and font-size
 * - children?: children are rendered as it is
 */
export type StyledButtonProps = {
  size?: Sizes;
  children?: ReactNode;
};

/**
 * Functional React component for StyledButton
 * Props:
 * - size: Sizes
 */
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
