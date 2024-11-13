import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, Rectangle, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer } from '@/components/ui/chart';
import { useMyServices } from '@/hooks/use-my-services';
import type { ChartConfig } from '@/components/ui/chart';
import type { RiskLevels } from '@/typings/mocks/services';
import HomeRiskServiceDialog from './home-risk-service-dialog';

type ChartData = {
  riskLevel: string;
  count: number;
  fill: string;
};

export const homeChartConfig: ChartConfig = {
  e: {
    label: 'Elevado',
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

export const RiskServicesChart = () => {
  const [open, setOpen] = useState(false);
  const [selectedRiskLevel, setSelectedRiskLevel] = useState<RiskLevels>();
  const myServices = useMyServices();

  const chartData = useMemo(() => {
    const chartDataTemp: ChartData[] = [];
    const servicesSelectedRiskLevel = myServices.map(a => a.riskLevel as string);
    if (servicesSelectedRiskLevel.length > 0) {
      'abcde'.split('').forEach(l => {
        if (servicesSelectedRiskLevel.includes(l)) {
          chartDataTemp.push({
            riskLevel: l,
            count: servicesSelectedRiskLevel.filter(a => a === l).length,
            fill: `var(--color-${l})`,
          });
        }
      });
    }
    return chartDataTemp;
  }, [myServices.map(a => a.name)]);

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
          <ChartContainer config={homeChartConfig} style={{ width: '100%', height: 230 }}>
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
                tickFormatter={a => homeChartConfig[a]?.label as string}
                tickLine={false}
                tickMargin={10}
              />
              <Bar
                dataKey="count"
                radius={4}
                barSize={42}
                onClick={bar => {
                  setSelectedRiskLevel(bar.riskLevel as RiskLevels);
                  setOpen(true);
                }}
                activeBar={({ ...a }) => <Rectangle {...a} stroke={a.payload.fill} />}
              >
                <LabelList position="top" offset={12} className="fill-foreground" fontSize={12} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <HomeRiskServiceDialog onClose={() => setOpen(false)} open={open} selectedRiskLevel={selectedRiskLevel} />
    </div>
  );
};
