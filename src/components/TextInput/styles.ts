import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  & + & {
    margin-top: 14px;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  color: ${({ theme }) => theme.COLORS.textColor400};
  margin-left: 3px;
`;

export const Input = styled.input<{ $borderRadius?: 'sm' | 'md' }>`
  background-color: ${({ theme }) => theme.COLORS.inputBackground};
  border: 1px solid ${({ theme }) => theme.COLORS.inputBorderColor};
  border-radius: ${({ $borderRadius }) =>
    $borderRadius === 'sm' ? '4px' : '40px'};
  color: ${({ theme }) => theme.COLORS.inputColor};
  outline: none;
  padding: 11px 28px;

  transition: all 0.3s ease-in-out;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.inputPlaceholderColor};
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.inputBackgroundHover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.inputBorderColorFocus};
  }
`;
