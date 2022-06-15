import React, { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import Typography from 'components/common/typography/Typography';

type TooltipProps = {
  readonly children: ReactElement;
  readonly title: string;
};

function Tooltip({ children, title }: TooltipProps) {
  return (
    <TooltipContainer>
      {children}
      <TooltipText data-testid="tooltip-text">{title}</TooltipText>
    </TooltipContainer>
  );
}

const TooltipText = styled.span(
  ({ theme }) => css`
    ${Typography};
    visibility: hidden;
    min-width: ${theme.spacing.tooltip};
    background-color: ${theme.colors.tooltip.background};
    color: ${theme.colors.tooltip.onBackground};
    font-size: ${theme.fonts.sizes.xs};
    text-align: center;
    padding: ${theme.spacing.xxs};
    border-radius: ${theme.spacing.xxs};
    margin-top: ${theme.spacing.xs};
    transform: translateX(-50%);
    left: 50%;

    position: absolute;
    z-index: 1;
  `,
);

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;

  &:hover ${TooltipText} {
    visibility: visible;
  }
`;

export default Tooltip;
export type { TooltipProps };
