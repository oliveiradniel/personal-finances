import { Container, TSizes } from './styles';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: Omit<TSizes, 'rounded'>;
  borderRadius?: TSizes;
  type: 'button' | 'reset' | 'submit';
  width?: string;
};

export default function Button({
  children,
  onClick,
  size = 'sm',
  borderRadius = 'sm',
  type = 'button',
  width = '100%',
}: ButtonProps) {
  return (
    <Container
      type={type}
      $borderRadius={borderRadius}
      $size={size}
      $width={width}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
