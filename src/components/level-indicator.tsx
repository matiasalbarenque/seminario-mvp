import type { LevelIndicatorProps } from '@/typings/components/level-indicator';

export const LevelIndicator = (props: LevelIndicatorProps) => {
  const { className, riskLevel = '' } = props;
  const commonClass = 'w-[6px] bg-gray-300 rounded-[1px] transition-colors duration-300';
  return (
    <div className={`flex items-end gap-0.5 ${className}`}>
      <div className={`${commonClass} ${riskLevel >= 'a' && 'bg-level-a'} h-1`} />
      <div className={`${commonClass} ${riskLevel >= 'b' && 'bg-level-b'} h-2`} />
      <div className={`${commonClass} ${riskLevel >= 'c' && 'bg-level-c'} h-3`} />
      <div className={`${commonClass} ${riskLevel >= 'd' && 'bg-level-d'} h-[18px]`} />
      <div className={`${commonClass} ${riskLevel >= 'e' && 'bg-level-e'} h-6`} />
    </div>
  );
};
