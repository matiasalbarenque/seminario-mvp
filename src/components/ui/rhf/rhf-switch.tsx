import type { FieldValues } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Switch } from '../switch';
import type { RhfSwitchProps } from '@/typings/components/rhf/rhf-switch';

export const RhfSwitch = <T extends FieldValues>(props: RhfSwitchProps<T>) => {
  const { control, disabled, name, rules, shouldUnregister, ...rest } = props;

  return (
    <Controller
      control={control}
      disabled={disabled}
      name={name}
      render={({ field }) => <Switch checked={field.value} onCheckedChange={field.onChange} {...rest} />}
      rules={rules}
      shouldUnregister={shouldUnregister}
    />
  );
};
