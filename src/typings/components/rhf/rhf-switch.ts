import type { FieldValues, UseControllerProps } from 'react-hook-form';
import type { SwitchProps } from '@radix-ui/react-switch';

export type RhfSwitchProps<T extends FieldValues> = UseControllerProps<T> & SwitchProps;
