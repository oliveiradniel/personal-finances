import { ChangeEvent, useId } from 'react';

import { Container, Input, Label } from './styles';

type TextInputProps = {
  borderRadius?: 'sm' | 'md';
  label?: string;
  placeholder?: string;
  value: string;
  isTypePassword?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function TextInput({
  label,
  value,
  placeholder,
  onChange,
  borderRadius = 'sm',
  isTypePassword = false,
}: TextInputProps) {
  const inputReferenceId = useId();

  return (
    <Container>
      {label && <Label htmlFor={inputReferenceId}>{label}</Label>}
      <Input
        id={inputReferenceId}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        $borderRadius={borderRadius}
      />
      {isTypePassword && <span>* Use pelo menos 1 letra.</span>}
    </Container>
  );
}
