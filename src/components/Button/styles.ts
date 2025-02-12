import styled, { css } from 'styled-components';

export type TSizes = 'rounded' | 'sm' | 'md';

type ContainerProps = {
  $borderRadius: TSizes;
  $size: Omit<TSizes, 'rounded'>;
  $width: string;
};

export const Container = styled.button<ContainerProps>`
  align-items: center;
  cursor: pointer;
  border: none;
  display: flex;
  font-weight: 600;
  justify-content: center;
  outline: none;

  transition: all 0.3s ease-in-out;

  ${({ $borderRadius, $size, $width, theme }) => css`
    background-color: ${theme.COLORS.buttonBackground};
    border-radius: ${$borderRadius === 'sm'
      ? '5px'
      : $borderRadius === 'md'
      ? '11px'
      : '50%'};
    color: ${theme.COLORS.buttonColor};
    height: ${$borderRadius === 'rounded' &&
    ($size === 'sm' ? '40px' : '48px')};
    padding: ${$borderRadius !== 'rounded' && ($size === 'sm' ? '5px' : '11px')}
      0;
    width: ${$borderRadius === 'rounded'
      ? $size === 'sm'
        ? '40px'
        : '48px'
      : $width};

    &:hover {
      background-color: ${theme.COLORS.buttonHover};
    }
  `}
`;

export const Content = styled.div``;

export const Title = styled.span``;
