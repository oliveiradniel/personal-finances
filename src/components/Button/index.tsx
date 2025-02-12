import { Container, TSizes } from './styles';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: Omit<TSizes, 'rounded'>;
  borderRadius?: TSizes;
  width?: string;
};

export default function Button({
  children,
  onClick,
  size = 'sm',
  borderRadius = 'sm',
  width = '100%',
}: ButtonProps) {
  return (
    <Container
      type="button"
      $borderRadius={borderRadius}
      $size={size}
      $width={width}
      onClick={onClick}
    >
      {children}
    </Container>
  );
}
