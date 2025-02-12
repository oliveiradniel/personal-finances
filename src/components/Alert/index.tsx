import { useEffect } from "react";

import { MdDoneAll, MdInfoOutline } from "react-icons/md";

import { Container, Content, Title } from "./styles";

type AlertProps = {
  type: "error" | "success";
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  autoHideDuration?: number;
  title?: string;
  children?: React.ReactNode;
};

export default function Alert({
  type,
  isVisible,
  setIsVisible,
  autoHideDuration = 6000,
  title,
  children,
}: AlertProps) {
  useEffect(() => {
    if (isVisible && autoHideDuration) {
      setTimeout(() => {
        setIsVisible(false);
      }, autoHideDuration);
    }
  }, [isVisible, setIsVisible, autoHideDuration]);

  return (
    <Container $isVisible={isVisible} $type={type}>
      <Content>
        {type === "error" && <MdInfoOutline className="icon" />}
        {type === "success" && <MdDoneAll className="icon" />}
        {title && <Title>{title}</Title>}
        {children}
      </Content>
    </Container>
  );
}
