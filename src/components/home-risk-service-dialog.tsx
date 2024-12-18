import type { HomeMonitorDialogProps } from '@/typings/components/home-monitor-dialog';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import type { RiskLevels } from '@/typings/mocks/services';
import { homeChartConfig } from './home-chart';
import { Card } from './ui/card';
import { useMyServices } from '@/hooks/use-my-services';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

interface HomeRiskServiceDialogProps extends HomeMonitorDialogProps {
  selectedRiskLevel?: RiskLevels;
}

const HomeRiskServiceDialog = ({ onClose, open, selectedRiskLevel }: HomeRiskServiceDialogProps) => {
  const myServices = useMyServices();
  const myServicesFiltered = useMemo(
    () => myServices.filter(a => a.riskLevel === selectedRiskLevel),
    [myServices, selectedRiskLevel]
  );

  if (!selectedRiskLevel) return null;

  const config = homeChartConfig[selectedRiskLevel];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Tus servicios con riesgo{' '}
            <span
              style={{
                color: config.color,
              }}
            >
              {config.label}
            </span>
          </DialogTitle>
          <DialogDescription className="grid grid-cols-2 gap-3 pt-3 max-h-96 overflow-auto py-2">
            {myServicesFiltered.map(service => (
              <Link to={`/services/${service.name}`} key={service.name}>
                <Card>
                  <div className="flex items-center justify-center p-3">
                    <div className=" w-16 h-16">
                      <img src={`/img/apps/${service.imgUrl}`} alt={service.label} />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={onClose}>Cerrar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HomeRiskServiceDialog;
