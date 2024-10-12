import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Input } from '../input';
import type { RhfInputProps } from '@/typings/components/rhf/rhf-input';

export const RhfInput = <T extends FieldValues>(props: RhfInputProps<T>) => {
  const { control, disabled, name, rules, shouldUnregister, ...rest } = props;

  return (
    <Controller
      control={control}
      disabled={disabled}
      name={name}
      render={({ field }) => <Input {...rest} {...field} />}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};
