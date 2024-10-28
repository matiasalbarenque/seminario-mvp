import type { LevelIndicatorProps } from '@/typings/components/level-indicator';
import { getValueByRiskLevel } from '@/assets/utils/utils';

export const LevelIndicator = (props: LevelIndicatorProps) => {
  const { className, riskLevel = '' } = props;
  const commonClass = 'w-[6px] bg-gray-300 rounded-[1px] transition-colors duration-300';
  const riskLevelValue = getValueByRiskLevel(riskLevel);
  return (
    <div className={`flex items-end gap-0.5 ${className}`}>
      <div className={`${commonClass} ${riskLevelValue >= 0 && 'bg-level-e'} h-1`} />
      <div className={`${commonClass} ${riskLevelValue >= 2 && 'bg-level-d'} h-2`} />
      <div className={`${commonClass} ${riskLevelValue >= 4 && 'bg-level-c'} h-3`} />
      <div className={`${commonClass} ${riskLevelValue >= 6 && 'bg-level-b'} h-[18px]`} />
      <div className={`${commonClass} ${riskLevelValue >= 8 && 'bg-level-a'} h-6`} />
    </div>
  );
};
