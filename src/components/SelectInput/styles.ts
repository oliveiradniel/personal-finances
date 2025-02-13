import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.COLORS.textColor400};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  margin-left: 3px;
`;

export const Select = styled.select`
  background-color: ${({ theme }) => theme.COLORS.inputBackground};
  border: 1px solid ${({ theme }) => theme.COLORS.inputBorderColor};
  border-radius: 4px;
  color: ${({ theme }) => theme.COLORS.inputPlaceholderColor};
  outline: none;
  padding: 10px 13px;
  width: 100%;

  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.inputBackgroundHover};
  }

  &:focus {
    border-color: ${({ theme }) => theme.COLORS.inputBorderColorFocus};
  }
`;
