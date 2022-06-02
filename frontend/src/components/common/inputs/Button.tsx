import React from 'react';
import styled, { css } from 'styled-components';
import Tooltip from 'components/common/data/Tooltip';

type ButtonType = 'button' | 'submit' | 'reset';

type Variant = 'contained' | 'outlined' | 'text';

type ButtonProps = {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly disabled?: boolean;
  readonly onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
  readonly type?: ButtonType;
  readonly variant?: Variant;
};

function Button({ title, children, onClick, disabled = false, type = 'button', variant = 'outlined' }: ButtonProps) {
  return (
    <Tooltip title={title}>
      <div>
        <StyledButton type={type} variant={variant} onClick={onClick} disabled={disabled}>
          {children}
        </StyledButton>
      </div>
    </Tooltip>
  );
}

const ButtonTypography = css(
  ({ theme }) => css`
    font-family: sans-serif;
    font-weight: ${theme.fonts.weights.regular};
    font-size: ${theme.fonts.sizes.s};
    text-transform: uppercase;
    line-height: 1.75;
  `,
);

const StyledButton = styled.button<{ readonly variant: Variant }>(
  ({ variant, theme }) => css`
    ${ButtonTypography};
    display: flex;
    border-radius: ${theme.spacing.xxs};
    cursor: pointer;
    padding: ${theme.spacing.xxs} ${theme.spacing.xs};
    outline: 0;
    border: 0;
    color: ${theme.colors.palette.primary.main};
    background-color: transparent;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    ${variant === 'contained' &&
    `
    color: ${theme.colors.onPrimary};
    background-color: ${theme.colors.palette.primary.main};
    
    :hover {
      background-color: ${theme.colors.palette.primary.light};
    }
  `}

    ${variant === 'outlined' &&
    `
    :hover {
      background-color: ${theme.colors.surface};
    }
  `}
  `,
);

export default Button;
