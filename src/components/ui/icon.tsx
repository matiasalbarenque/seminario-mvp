import { Icon as IconifyIcon } from '@iconify/react';
import type { IconProps } from '@/typings/components';

export const Icon = (props: IconProps) => {
  const { icon, className, size = 22 } = props;
  return <IconifyIcon icon={icon} className={className} style={{ fontSize: size }} />;
};
