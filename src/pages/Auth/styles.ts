import { Link } from 'react-router-dom';

import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.background};
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 420px;
`;

export const Card = styled.div`
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.borderColor};
  border-radius: 4px;
  box-shadow: black 0px 3px 7px -6px;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 30px;
  width: 100%;
`;

export const CardHeader = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const CardTitle = styled.span`
  color: ${({ theme }) => theme.COLORS.authCardSubTitleColor};
  font-size: ${({ theme }) => theme.FONT_SIZES.lg};
  font-weight: 800px;
`;

export const CardSubTitle = styled.span`
  color: ${({ theme }) => theme.COLORS.authCardSubTitleColor};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-weight: 600px;
`;

export const CardBody = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 15px;
  width: 100%;
`;

export const CardFooter = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.COLORS.primary};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
`;
