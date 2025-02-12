import styled from "styled-components";

type ContainerProps = {
  $isVisible: boolean;
  $type: string;
};

export const Container = styled.div<ContainerProps>`
  background-color: ${({ theme, $type }) =>
    $type === "error" ? theme.COLORS.danger : theme.COLORS.success};
  border-radius: 4px;
  gap: 5px;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  padding: 15px;
  pointer-events: ${({ $isVisible }) => ($isVisible ? "all" : "none")};
  position: fixed;
  right: 30px;
  top: 10px;
  transform: ${({ $isVisible }) =>
    $isVisible ? "translateX(0)" : "translateX(20%)"};

  transition: transform 0.6s ease-in-out, opacity 0.3s ease-in-out;

  z-index: 1;

  .icon {
    color: ${({ theme }) => theme.COLORS.white};
    font-size: ${({ theme }) => theme.FONT_SIZES.lg};
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 16px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZES.sm};
  font-weight: 700;
`;
