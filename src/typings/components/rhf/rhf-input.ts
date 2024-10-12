import type { FieldValues, UseControllerProps } from 'react-hook-form';
import type { InputProps } from '@/components/ui/input';

export type RhfInputProps<T extends FieldValues> = UseControllerProps<T> & InputProps;
