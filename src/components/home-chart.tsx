import { useMemo, useState } from 'react';
import { Bar, BarChart, CartesianGrid, LabelList, Pie, PieChart, Rectangle, XAxis } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartLegend, ChartLegendContent } from '@/components/ui/chart';
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

  console.log(chartData);

  if (chartData.length === 0) {
    return <></>;
  }

  return (
    <div className="px-3 flex flex-col gap-5">
      <Card className="shadow-none">
        <CardHeader className="py-4">
          <CardTitle>Mis servicios</CardTitle>
        </CardHeader>
        <CardContent className="px-0">
          <ChartContainer
            config={homeChartConfig}
            className="mx-auto aspect-square max-h-[300px]"
            style={{ width: '100%', height: 230 }}
          >
            <PieChart>
              <Pie
                data={chartData}
                dataKey="count"
                onClick={bar => {
                  setSelectedRiskLevel(bar.riskLevel as RiskLevels);
                  setOpen(true);
                }}
                label={({ payload, ...props }) => {
                  return (
                    <text
                      cx={props.cx}
                      cy={props.cy}
                      x={props.x}
                      y={props.y}
                      textAnchor={props.textAnchor}
                      dominantBaseline={props.dominantBaseline}
                      fill="hsla(var(--foreground))"
                    >
                      {payload.count}
                    </text>
                  );
                }}
              />
            </PieChart>
          </ChartContainer>
          <div className="mx-auto flex justify-center gap-4 text-xs">
            {Object.entries(homeChartConfig)
              .toReversed()
              .map(([riskLevel, config], i) => {
                if (config.label === 'Inexistente') return null;
                const count = chartData.find(a => a.riskLevel === riskLevel)?.count;
                return (
                  <div key={i} className="flex items-center gap-2">
                    <div
                      className="h-2 w-2 shrink-0 rounded-[2px]"
                      style={{
                        backgroundColor: config.color,
                      }}
                    />
                    <div>
                      <span>{config.label} </span>
                      <span className="text-xs">{count ?? 0}</span>
                    </div>
                  </div>
                );
              })}
          </div>
        </CardContent>
      </Card>
      <HomeRiskServiceDialog onClose={() => setOpen(false)} open={open} selectedRiskLevel={selectedRiskLevel} />
    </div>
  );
};
