import { useEffect, useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, Rectangle, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
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
    e: {
      label: 'Altísimo',
      color: 'hsl(var(--level-e))',
    },
    d: {
      label: 'Alto',
      color: 'hsl(var(--level-d))',
    },
    c: {
      label: 'Medio',
      color: 'hsl(var(--level-c))',
    },
    b: {
      label: 'Bajo',
      color: 'hsl(var(--level-b))',
    },
    a: {
      label: 'Inexistente',
      color: 'hsl(var(--level-a))',
    },
  };

  if (chartData.length === 0) {
    return <></>;
  }

  return (
    <div className="p-3 flex flex-col gap-5">
      <Card className="shadow-none">
        <CardHeader className="py-4">
          <CardTitle>Mis servicios</CardTitle>
          <CardDescription>Nivel de riesgo por servicio</CardDescription>
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
    </div>
  );
};
