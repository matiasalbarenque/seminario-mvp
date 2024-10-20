import { useEffect, useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, Rectangle, XAxis } from 'recharts';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import { Icon } from '@/components/ui/icon';
import { useAccountStore } from '@/store/account';
import { sortCompareStrings } from '@/assets/utils';
import type { ChartConfig } from '@/components/ui/chart';
import { servicesMock } from '@/assets/mocks/services';

type ChartData = {
  riskLevel: string;
  count: number;
  fill: string;
};

export const RiskServicesChart = () => {
  const accountStore = useAccountStore();
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const servicesSelectedRiskLevelMemo = useMemo(() => {
    const servicesOrdered = servicesMock.sort((a, b) => sortCompareStrings(a.name, b.name));
    const servicesSelected = servicesOrdered.filter(a => accountStore.services.some(b => b === a?.name));
    return servicesSelected.map(a => a.riskLevel as string);
  }, [accountStore.services]);

  useEffect(() => {
    if (servicesSelectedRiskLevelMemo.length > 0) {
      const chartDataTemp: ChartData[] = [];
      'abcde'.split('').forEach(l => {
        if (servicesSelectedRiskLevelMemo.includes(l)) {
          chartDataTemp.push({
            riskLevel: l,
            count: servicesSelectedRiskLevelMemo.filter(a => a === l).length,
            fill: `var(--color-${l})`,
          });
        }
      });
      setChartData(chartDataTemp);
    }
  }, [servicesSelectedRiskLevelMemo]);

  const chartConfig: ChartConfig = {
    a: {
      label: 'A',
      color: 'hsl(var(--level-a))',
    },
    b: {
      label: 'B',
      color: 'hsl(var(--level-b))',
    },
    c: {
      label: 'C',
      color: 'hsl(var(--level-c))',
    },
    d: {
      label: 'D',
      color: 'hsl(var(--level-d))',
    },
    e: {
      label: 'E',
      color: 'hsl(var(--level-e))',
    },
  };

  if (chartData.length === 0) {
    return <></>;
  }

  return (
    <div className="p-3 flex flex-col gap-5">
      <Card className="shadow-none">
        <CardHeader className="py-4">
          <CardTitle>My Services</CardTitle>
          <CardDescription>Risk level by service selected</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={chartData}
              margin={{
                top: 24,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                axisLine={false}
                dataKey="riskLevel"
                tickFormatter={a => chartConfig[a]?.label as string}
                tickLine={false}
                tickMargin={10}
              />
              <Bar
                dataKey="count"
                radius={4}
                barSize={42}
                activeBar={({ ...a }) => <Rectangle {...a} stroke={a.payload.fill} />}
              >
                <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Alert>
        <Icon icon="solar:chat-dots-outline" size={20} />
        <AlertTitle>About the risk letter shown above</AlertTitle>
        <AlertDescription>
          The letter you see at the top is calculated taking into account the average risk of all your selected
          applications
        </AlertDescription>
      </Alert>
    </div>
  );
};
