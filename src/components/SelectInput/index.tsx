import { ChangeEvent, useId } from 'react';

import { Container, Label, Select } from './styles';

type Options = {
  label: string;
  value: string;
};

type SelectInputProps = {
  value: string;
  options: Options[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
};

export default function SelectInput({
  value,
  options,
  onChange,
  label,
}: SelectInputProps) {
  const selectReferenceId = useId();

  return (
    <Container>
      {label && <Label htmlFor={selectReferenceId}>{label}</Label>}

      <Select id={selectReferenceId} value={value} onChange={onChange}>
        {options.map((option, key) => (
          <option key={key} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
    </Container>
  );
}
